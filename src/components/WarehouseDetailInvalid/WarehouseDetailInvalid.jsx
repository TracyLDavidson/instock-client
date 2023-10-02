import "../WarehouseDetailInvalid/WarehouseDetailInvalid.scss";
import errorIcon from "../../assets/icons/error.svg";
import React from "react";

/*
  Popup Description component 
*/

const PopupInvalid = (props) => {
  return props.trigger ? (
    <div className="PopupInvalid">
      <img src={errorIcon} alt="Error Icon" className="PopupInvalid__img" />
      <p className="PopupInvalid__message">This field is required</p>
    </div>
  ) : (
    ""
  );
};

export default PopupInvalid;
