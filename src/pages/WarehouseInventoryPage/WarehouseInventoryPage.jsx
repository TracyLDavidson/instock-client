import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleWarehouse, fetchWarehouseInventory } from "../../utils/api";
import { Table } from "../../components/Table/Table";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Paper } from "../../components/Paper/Paper";
import { PageActions } from "../../components/PageActions/PageActions";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import editIconWhite from "../../assets/icons/edit-white.svg";

import "./WarehouseInventoryPage.scss";
// TITAN-10:
import WarehouseSpecifics from "../../components/WarehouseSpecifics/WarehouseSpecifics";

const allowableProperties = ["item_name", "category", "status", "quantity"];

const formatResponse = (data = []) =>
  data.map((row) => {
    const filteredRow = {};
    const keys = Object.keys(row)
      .filter((key) => allowableProperties.includes(key))
      .forEach((key) => {
        filteredRow[key] = row[key];
      });

    return filteredRow;
  });

const generateTableHeaderLabels = (rows) => {
  const headers = Object.keys(rows[0]);
  const sortable = [true, true, true, true, false];
  const labels = ["inventory item", "category", "status", "qty"];
  const setStatusClassName = (tableCellValue) => {
    let className = "";
    if (tableCellValue === "In Stock") {
      className = "chip chip--green";
    }
    if (tableCellValue === "Out of Stock") {
      className = "chip chip--red";
    }
    return className;
  };

  const tableHeaders = headers.map((header, index) => {
    return {
      key: header,
      label: labels[index],
      sortable: sortable[index],
      className: setStatusClassName,
    };
  });

  tableHeaders.push({
    key: "actions",
    label: "actions",
    sortable: false,
    className: () => {},
  });
  return tableHeaders;
};

export default function WarehouseInventoryPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [warehouseDetails, setWarehouseDetails] = useState({});
  const [sortBy, setSortBy] = useState("");
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [sourceRows, setSourceRows] = useState([]);

  useEffect(() => {
    const effects = async () => {
      try {
        const singleWarehouseRes = await fetchSingleWarehouse(
          params.warehouseId
        );
        const warehouseInventoryRes = await fetchWarehouseInventory(
          params.warehouseId
        );
        if (singleWarehouseRes.data && warehouseInventoryRes.data) {
          const rows = formatResponse(warehouseInventoryRes.data);
          if (rows.length !== 0) {
            const headers = generateTableHeaderLabels(rows);
            setTableHeaders(headers);
            setTableRows(rows);
          }

          setSourceRows(warehouseInventoryRes.data);

          setWarehouseDetails(singleWarehouseRes.data[0]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    effects();
  }, [params.warehouseId]);

  return (
    <div className="warehouse_inventory_page">
      <div className="warehouse_inventory_page__container">
        <Paper>
          <PageHeader
            title={warehouseDetails.warehouse_name}
            onNavigateBack={() => navigate("/")}
            pageActionsComponent={() => {
              return (
                <PrimaryButton
                  onClick={() =>
                    navigate(
                      `/warehouses/${warehouseDetails.warehouse_id}/edit`
                    )
                  }
                >
                  <img src={editIconWhite} alt="An edit icon" />
                  <p>Edit</p>
                </PrimaryButton>
              );
            }}
          ></PageHeader>
          <div className="warehouse_inventory_page__details-component">
            <WarehouseSpecifics />
            {/* TITAN-10: Warehouse Details Component  */}
          </div>
          <Table
            headers={tableHeaders}
            rows={tableRows}
            sourceRows={sourceRows}
            actionsComponent={(row) => {
              return (
                <PageActions
                  onEdit={() => navigate(`/inventory/${row.id}/edit`)}
                />
              );
            }}
            onTableSort={setSortBy}
            sortBy={sortBy}
            onRowClick={(row) => navigate(`/inventory/${row.id}/view`)}
          />
        </Paper>
      </div>
    </div>
  );
}
