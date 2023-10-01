import React from "react";
import { TableHeader } from "./TableHeader";
import { TableRows } from "./TableRows";

import "./Table.scss";

export const Table = ({
  headers = [],
  sourceRows = [],
  rows = [],
  sortBy = "",
  actionsComponent = () => <></>,
  onTableSort = () => {},
  onRowClick = () => {},
}) => {
  return (
    <div className="table-container">
      <TableHeader headers={headers} onSort={onTableSort} sortBy={sortBy} />
      <TableRows
        headers={headers}
        rows={rows}
        sourceRows={sourceRows}
        actionsComponent={actionsComponent}
        sortBy={sortBy}
        onRowClick={onRowClick}
      />
    </div>
  );
};
