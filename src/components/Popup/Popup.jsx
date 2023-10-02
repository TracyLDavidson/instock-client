import "../Popup/Popup.scss";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { deleteSingleWarehouse } from "../../utils/apiUtils.mjs";

/*
  Popup component 
*/

const Popup = (props) => {
  const Navigate = useNavigate();

  const deleteSingleWarehouseFunction = async (warehouseID) => {
    // Function to delete data based on ID in URL page
    try {
      const { data } = await deleteSingleWarehouse(warehouseID);
      Navigate("/");
    } catch (error) {
      alert("ERROR 404\nVideo not found... Redirecting to Home Page");
      Navigate("/");
    }
  };

  const deleteHandler = () => {
    deleteSingleWarehouseFunction(38);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__content">
          <h1>{`Delete Washington warehouse?`}</h1>
          <p>
            {`Please confirm that you'd like to delete the Washington from the
            list of warehouses. You won't be able to undo this action.`}
          </p>
        </div>
        <div className="popup__button-container">
          <button
            className="popup__cancel-btn"
            onClick={() => props.setTrigger(false)}
          >
            Cancel
          </button>
          <button className="popup__action-btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
