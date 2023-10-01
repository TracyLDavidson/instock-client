import React, { useState, useEffect } from "react";
import { fetchAllWarehouses } from "../../utils/api";
import { Table } from "../../components/Table/Table";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Paper } from "../../components/Paper/Paper";
import { PageActions } from "../../components/PageActions/PageActions";
import { Search } from "../../components/Search/Search";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";

import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import "./WarehousesPage.scss";

const allowableProperties = [
  "warehouse_name",
  "address",
  "contact_name",
  "contact_email",
  "contact_phone",
];
const formatWarehousesResponse = (data = []) =>
  data.map((row) => {
    const filteredRow = {};
    const keys = Object.keys(row)
      .filter((key) => allowableProperties.includes(key))
      .forEach((key) => {
        filteredRow[key] = row[key];
      });

    filteredRow.contact_information = `${filteredRow["contact_phone"]} ${filteredRow["contact_email"]}`;
    delete filteredRow["contact_phone"];
    delete filteredRow["contact_email"];
    return filteredRow;
  });

const generateTableHeaderLabels = (rows) => {
  const headers = Object.keys(rows[0]);
  const sortable = [true, true, true, true, false];
  const labels = [
    "warehouse",
    "address",
    "contact name",
    "contact information",
  ];
  const tableHeaders = headers.map((header, index) => {
    return {
      key: header,
      label: labels[index],
      sortable: sortable[index],
    };
  });

  tableHeaders.push({ key: "actions", label: "actions", sortable: false });
  return tableHeaders;
};

export default function Warehouse() {
  const [sortBy, setSortBy] = useState("");
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    const effects = async () => {
      const response = await fetchAllWarehouses();
      if (response.data && response.data.length) {
        const rows = formatWarehousesResponse(response.data);
        const headers = generateTableHeaderLabels(rows);
        setTableHeaders(headers);
        setTableRows(rows);
      }
    };
    effects();
  }, []);

  return (
    <div className="warehouses_page">
      <div className="warehouses_page__container">
        <Paper>
          <PageHeader title="Warehouses">
            <Search />
            <PrimaryButton>+ Add New Warehouse</PrimaryButton>
          </PageHeader>
          <Table
            headers={tableHeaders}
            rows={tableRows}
            actionsComponent={() => <PageActions />}
            onTableSort={setSortBy}
            sortBy={sortBy}
          />
        </Paper>
      </div>
    </div>
  );
}
