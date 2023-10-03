import React, { useEffect, useState } from "react";
import { TableTitleCell } from "./TableTitleCell";

export const TableRows = ({
  rows = [],
  sourceRows = [],
  headers = [],
  sortBy = "",
  onRowClick = () => {},
  actionsComponent = () => <></>,
}) => {
  const [sortedRows, setSortedRows] = useState(rows);
  const [sources, setSources] = useState(sourceRows);
  useEffect(() => {
    const newSortedRows = [...rows];
    const newSortedSources = [...sourceRows];

    const sortTableRows = (rowData, updateState) => {
      rowData.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        } else if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        return 0;
      });
      updateState(rowData);
    };

    sortTableRows(newSortedRows, setSortedRows);
    sortTableRows(newSortedSources, setSources);
  }, [sortBy, rows]);

  return (
    <>
      {!!sortedRows.length &&
        sortedRows.map((row, rowIndex) => {
          return (
            <div
              key={`${parseInt(Math.random() * 1000)}-${rowIndex}`}
              className="table-row"
            >
              {Object.keys(row).map((key, index) => {
                const headerLabel = headers.find(
                  (header) => header.key === key
                ).label;
                const cellClassName = headers[index].className(row[key]);
                return (
                  <div
                    key={`table-cell-${index}`}
                    className={`table-row__table-cell`}
                    onClick={() => onRowClick(sources[rowIndex])}
                  >
                    <h4>{headerLabel}</h4>
                    {index === 0 && <TableTitleCell title={row[key]} />}
                    {index !== 0 && typeof row[key] === "function"
                      ? row[key]()
                      : index !== 0 && (
                          <p className={cellClassName}>{row[key]}</p>
                        )}
                  </div>
                );
              })}
              <div className="table-row__table-cell">
                {actionsComponent(sources[rowIndex])}
              </div>
            </div>
          );
        })}
    </>
  );
};
