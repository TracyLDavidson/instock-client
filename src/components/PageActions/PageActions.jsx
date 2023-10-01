import React from "react";
import "./PageActions.scss";
import { NullFunction } from "../NullComponent/NullComponent";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";

export const PageActions = ({
  row = {},
  onEdit = NullFunction,
  onDelete = NullFunction,
}) => {
  return (
    <div className="page-actions">
      <img src={deleteIcon} alt="A delete icon" onClick={() => onDelete(row)} />
      <img src={editIcon} alt="An Edit icon" onClick={() => onEdit(row)} />
    </div>
  );
};
