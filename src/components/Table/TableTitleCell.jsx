import React from "react";
import "./Table.scss";
import chevronLeft from "../../assets/icons/chevron.svg";

export const TableTitleCell = ({ title, onClick }) => {
  return (
    <div className="table-title-cell">
      <p>{title}</p>
      <img src={chevronLeft} alt="A left chevron" />
    </div>
  );
};
