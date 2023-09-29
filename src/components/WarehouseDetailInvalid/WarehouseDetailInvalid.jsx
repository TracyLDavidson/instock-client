import "../WarehouseDetailInvalid/WarehouseDetailInvalid.scss";
import errorIcon from "../../assets/icons/error.svg";
import React from "react";

/*
  Popup Description component 
*/

const PopupInvalid = (props) => {
  return props.trigger ? (
    <div className="popup">
      <img src={errorIcon} alt="Error Icon" className="popup__img" />
      <p className="popup__message">This field is required</p>
    </div>
  ) : (
    ""
  );
};

export default PopupInvalid;
