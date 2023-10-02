import "./InventorySpecifics.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PageHeader } from "../PageHeader/PageHeader";
import { fetchSingleInventory, fetchSingleWarehouse } from "../../utils/api";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { Paper } from "../Paper/Paper";

import editIconWhite from "../../assets/icons/edit-white.svg";

export default function InventorySpecifics() {
  const navigate = useNavigate();
  const { inventoryId } = useParams();
  const [inventoryData, setInventoryData] = useState({});
  const [warehouseDetails, setWarehouseDetails] = useState({});

  useEffect(() => {
    const effect = async () => {
      try {
        const res = await fetchSingleInventory(inventoryId);
        const warehouseRes = await fetchSingleWarehouse(
          res.data[0].warehouse_id
        );

        setInventoryData(res.data[0]);
        setWarehouseDetails(warehouseRes.data[0]);
      } catch (e) {
        console.log("unable to fetch single inventory item", e);
      }
    };
    effect();
  }, [inventoryId]);

  const statusClassName =
    inventoryData.status === "In Stock" ? "chip chip--green" : "chip chip--red";

  return (
    <section className="inventory-details">
      <div className="inventory-details__container">
        {inventoryData.id && (
          <Paper>
            <PageHeader
              title={inventoryData.item_name}
              onNavigateBack={() => navigate("/inventory")}
              pageActionsComponent={() => (
                <PrimaryButton
                  onClick={() =>
                    navigate(`/inventory/${inventoryData.id}/edit`)
                  }
                >
                  <img src={editIconWhite} alt="An edit icon" />
                  <p>Edit</p>
                </PrimaryButton>
              )}
            ></PageHeader>
            <section className="inventory-details__section">
              <div className="inventory-details__description-container">
                <div className="inventory-details__description">
                  <h4>ITEM DESCRIPTION:</h4>
                  <p>{inventoryData.description}</p>
                </div>

                <div className="inventory-details__description">
                  <h4>CATEGORY:</h4>
                  <p>{inventoryData.category}</p>
                </div>
              </div>
              <div className="inventory-details__description-container">
                <div className="inventory-details__description">
                  <h4>STATUS:</h4>
                  <p className={statusClassName}>{inventoryData.status}</p>
                </div>

                <div className="inventory-details__description">
                  <h4>QUANTITY:</h4>
                  <p>{inventoryData.quantity}</p>
                </div>

                <div className="inventory-details__description">
                  <h4>WAREHOUSE:</h4>
                  <p>{warehouseDetails.warehouse_name}</p>
                </div>
              </div>
            </section>
          </Paper>
        )}
      </div>
    </section>
  );
}
