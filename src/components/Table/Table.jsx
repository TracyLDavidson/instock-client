import React from "react";
import { TableHeader } from "./TableHeader";
import { TableRows } from "./TableRows";
import "./Table.scss";

export const Table = ({
  headers = [],
  rows = [],
  sortBy = "",
  actionsComponent = () => <></>,
  onTableSort = () => {},
}) => {
  return (
    <div className="table-container">
      <TableHeader headers={headers} onSort={onTableSort} sortBy={sortBy} />
      <TableRows
        rows={rows}
        headers={headers}
        actionsComponent={actionsComponent}
        sortBy={sortBy}
      />
    </div>
  );
};
