import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchInventory } from "../../utils/api";
import { Table } from "../../components/Table/Table";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Paper } from "../../components/Paper/Paper";
import { PageActions } from "../../components/PageActions/PageActions";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { Search } from "../../components/Search/Search";
import editIconWhite from "../../assets/icons/edit-white.svg";
import Popup from "../../components/Popup/Popup";

import "./InventoryPage.scss";

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
  const [sortBy, setSortBy] = useState("");
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [sourceRows, setSourceRows] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTableRow, setSelectedTableRow] = useState({});

  // const handleRowId = (id) => {
  //   navigate(`/inventory/${id}/edit`);
  // }

  useEffect(() => {
    const effects = async () => {
      try {
        const inventoryRes = await fetchInventory();
        if (inventoryRes.data) {
          const rows = formatResponse(inventoryRes.data);
          const headers = generateTableHeaderLabels(rows);
          setTableHeaders(headers);
          setTableRows(rows);
          setSourceRows(inventoryRes.data);
        }
      } catch (e) {}
    };
    effects();
  }, []);

  return (
    <div className="inventory_page">
      <div className="inventory_page__container">
        <Paper>
          <PageHeader title={"Inventory"} onNavigateBack={() => navigate("/")}>
            <Search />
            <Link to="/inventory/add">
              <PrimaryButton>+ Add New Item</PrimaryButton>
            </Link>
          </PageHeader>

          <Table
            headers={tableHeaders}
            rows={tableRows}
            sourceRows={sourceRows}
            actionsComponent={(row) => (
              <PageActions
                onDelete={() => {
                  setSelectedTableRow(row);
                  setShowDeleteModal(true);
                }}
                onEdit={() => navigate(`/inventory/${row.id}/edit`)}
              />
            )}
            onTableSort={setSortBy}
            sortBy={sortBy}
            onRowClick={(row) => navigate(`/inventory/${row.id}/view`)}
          />
          {showDeleteModal && (
            <Popup
              onCancel={() => setShowDeleteModal(false)}
              onConfirm={async () => {
                try {
                  await deleteWarehouseId(selectedTableRow.id);
                  setShowDeleteModal(false);
                  setSelectedTableRow({});
                  await effects();
                } catch (e) {
                  console.log(
                    "there was an error trying to delete the warehouse"
                  );
                }
              }}
              confirmText={"Delete"}
              cancelText={"Cancel"}
              Name={selectedTableRow.item_name}
              bodyText={"from the inventory list"}
              headerText={"inventory item"}
            ></Popup>
          )}
        </Paper>
      </div>
    </div>
  );
}
