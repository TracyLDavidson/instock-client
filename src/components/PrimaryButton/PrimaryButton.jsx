import React from "react";
import "./PrimaryButton.scss";

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <div className="btn btn--primary" onClick={onClick}>
      {children}
    </div>
  );
};
