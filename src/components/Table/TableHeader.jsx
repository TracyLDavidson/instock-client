import react from "react";
import sortIconDefault from "../../assets/icons/table-sort-default.svg";
import sortIconActive from "../../assets/icons/table-sort-active.svg";

export const TableHeader = ({
  headers = [],
  sortBy = "",
  onSort = () => {},
}) => {
  return (
    <div className="table-header">
      {headers.map((header) => {
        return (
          <div key={header.key} className="table-header__header-cell">
            <div>
              <div className="table-header__title">
                <p>{header.label}</p>
              </div>
              {header.sortable ? (
                <div
                  className="table-header__sort-column"
                  onClick={() => onSort(header.label)}
                >
                  <img
                    src={
                      sortBy === header.label ? sortIconActive : sortIconDefault
                    }
                  />
                </div>
              ) : (
                <div className="table-header__sort-column"></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
