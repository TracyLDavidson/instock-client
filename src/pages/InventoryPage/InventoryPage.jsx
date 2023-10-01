import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchInventory } from "../../utils/api";
import { Table } from "../../components/Table/Table";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Paper } from "../../components/Paper/Paper";
import { PageActions } from "../../components/PageActions/PageActions";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { Search } from "../../components/Search/Search";
import editIconWhite from "../../assets/icons/edit-white.svg";

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
            <PrimaryButton>
              <img src={editIconWhite} alt="An edit icon" />
              Edit
            </PrimaryButton>
          </PageHeader>

          <Table
            headers={tableHeaders}
            rows={tableRows}
            sourceRows={sourceRows}
            actionsComponent={(row) => <PageActions />}
            onTableSort={setSortBy}
            sortBy={sortBy}
            onRowClick={(row) => navigate(`/inventory/${row.id}/edit`)}
          />
        </Paper>
      </div>
    </div>
  );
}
