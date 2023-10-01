import React, { useEffect, useState } from "react";
import { TableTitleCell } from "./TableTitleCell";

export const TableRows = ({
  rows = [],
  headers = [],
  sortBy = "",
  onRowClick = () => {},
  actionsComponent = () => {},
}) => {
  const [sortedRows, setSortedRows] = useState(rows);

  useEffect(() => {
    const newSortedRows = [...rows];

    newSortedRows.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      } else if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      return 0;
    });

    setSortedRows(newSortedRows);
  }, [sortBy]);

  return (
    <>
      {sortedRows.map((row, index) => {
        return (
          <div
            key={`${parseInt(Math.random() * 1000)}-${index}`}
            className="table-row"
          >
            {Object.keys(row).map((key, index) => {
              const headerLabel = headers.find(
                (header) => header.key === key
              ).label;
              return (
                <div
                  key={`table-cell-${index}`}
                  className="table-row__table-cell"
                >
                  <h4>{headerLabel}</h4>
                  {index === 0 && <TableTitleCell title={row[key]} />}
                  {index !== 0 && typeof row[key] === "function"
                    ? row[key]()
                    : index !== 0 && row[key]}
                </div>
              );
            })}
            <div className="table-row__table-cell">{actionsComponent()}</div>
          </div>
        );
      })}
    </>
  );
};
