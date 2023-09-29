import React, { useEffect, useState } from "react";

export const TableRows = ({
  rows = [],
  headers = [],
  sortBy = "",
  onRowClick = () => {},
  actionsComponent = () => {},
}) => {
  const [sortedRows, setSortedRows] = useState(rows);

  useEffect(() => {
    // const newSortedRows = [
    //   ...rows.filter((row) => row.key === sortBy),
    //   ...rows.filter((row) => row.key !== sortBy),
    // ];

    setSortedRows(rows);
  }, [sortBy]);

  console.log(sortedRows);
  return (
    <>
      {sortedRows.map((row, index) => {
        return (
          <div
            key={`${parseInt(Math.random() * 1000)}-${index}`}
            className="table-row"
          >
            {Object.keys(row).map((key, index) => {
              console.log(row[key]);
              const headerLabel = headers.find(
                (header) => header.key === key
              ).label;
              return (
                <div
                  key={`table-cell-${index}`}
                  className="table-row__table-cell"
                >
                  <h4>{headerLabel}</h4>
                  {typeof row[key] === "function" ? row[key]() : row[key]}
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
