import React, { useEffect, useState } from "react";
import { TableTitleCell } from "./TableTitleCell";

export const TableRows = ({
  rows = [],
  sourceRows = [],
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
  }, [sortBy, rows]);

  return (
    <>
      {!!sortedRows.length &&
        sortedRows.map((row, index) => {
          return (
            <div
              key={`${parseInt(Math.random() * 1000)}-${index}`}
              className="table-row"
            >
              {Object.keys(row).map((key, index) => {
                const headerLabel = headers.find(
                  (header) => header.key === key
                ).label;
                const cellCallName = headers[index].className(row[key]);

                return (
                  <div
                    key={`table-cell-${index}`}
                    className={`table-row__table-cell`}
                    onClick={() => onRowClick(sourceRows[index])}
                  >
                    <h4>{headerLabel}</h4>
                    {index === 0 && <TableTitleCell title={row[key]} />}
                    {index !== 0 && typeof row[key] === "function"
                      ? row[key]()
                      : index !== 0 && (
                          <p className={cellCallName}>{row[key]}</p>
                        )}
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
