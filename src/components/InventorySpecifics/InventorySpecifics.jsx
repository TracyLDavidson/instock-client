import "./InventorySpecifics.scss";
import backArrow from "../../assets/icons/back-arrow.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageHeader } from "../PageHeader/PageHeader";
import { fetchSingleInventory } from "../../utils/api";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { Paper } from "../Paper/Paper";

import editIconWhite from "../../assets/icons/edit-white.svg";

export default function InventorySpecifics() {
  const { inventoryId } = useParams();
  const [inventoryData, setInventoryData] = useState({});

  useEffect(() => {
    const effect = async () => {
      try {
        const res = await fetchSingleInventory(inventoryId);
        setInventoryData(res.data[0]);
        console.log(res.data[0]);
      } catch (e) {
        console.log("unable to fetch single inventory item", e);
      }
    };
    effect();
  }, [inventoryId]);

  return (
    <section className="inventory-details">
      {inventoryData.id && (
        <Paper>
          <PageHeader
            title={inventoryData.item_name}
            onNavigateBack={() => {}}
            pageActionsComponent={() => (
              <PrimaryButton>
                <img src={editIconWhite} alt="An edit icon" />
                Edit
              </PrimaryButton>
            )}
          ></PageHeader>
          <div className="inventory-details__container">
            <div className="inventory-details__description-container">
              <h4>ITEM DESCRIPTION:</h4>
              <p>{inventoryData.description}</p>
            </div>

            <div className="inventory-details__category-container">
              <h4>CATEGORY:</h4>
              <p>{inventoryData.category}</p>
            </div>

            <div className="inventory-details__mid-container">
              <div className="inventory-details__status-container">
                <h4>STATUS:</h4>
                <p>{inventoryData.status}</p>
              </div>

              <div className="inventory-details__quantity-container">
                <h4>QUANTITY:</h4>
                <p>{inventoryData.quantity}</p>
              </div>
            </div>

            <div className="inventory-details__warehouse-container">
              <h4>WAREHOUSE:</h4>
              <p>{inventoryData.warehouse_id}</p>
            </div>
          </div>
        </Paper>
      )}
    </section>
  );
}
