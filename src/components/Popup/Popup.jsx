import "../Popup/Popup.scss";
import React from "react";
import closeIcon from "../../assets/icons/close.svg";

const Popup = ({
  confirmText = "",
  cancelText = "",
  onCancel = () => {},
  onConfirm = () => {},
  Name,
  bodyText,
  headerText,
}) => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__content">
          <div className="popup__img-container" onClick={onCancel}>
            <img src={closeIcon} alt="close icon" className="popup__img" />
          </div>
          <h1 className="popup__header">{`Delete ${Name} ${headerText}?`}</h1>
          <p className="popup__description">
            {`Please confirm that you'd like to delete the ${Name} ${bodyText}. You won't be able to undo this action.`}
          </p>
        </div>
        <div className="popup__button-container">
          <button className="popup__cancel-btn" onClick={onCancel}>
            {cancelText}
          </button>
          <button className="popup__action-btn" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
