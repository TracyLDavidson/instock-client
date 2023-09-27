import React from "react";
import "./WarehouseDetails.scss";
import Textbox from "../Textbox/Textbox.jsx";
import { useState } from "react";

/*
    Warehouse Details Component
*/

const WarehouseDetails = ({ title, buttonTitle }) => {
  /* useStates Variables */
  const [WarehouseName, setWarehouseName] = useState("");
  const [StreetAddress, setStreetAddress] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const [ContactName, setWareContactName] = useState("");
  const [Position, setPosition] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");

  /* onChange handlers */
  const handleWarehouseNameChange = (e) => setWarehouseName(e.target.value);
  const handleStreetAddressChange = (e) => setStreetAddress(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleContactNameChange = (e) => setWareContactName(e.target.value);
  const handlePositionChange = (e) => setPosition(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  /* Validations */
  const isWarehouseNameValid = () => {
    // Warehouse Name Validation
    return true;
  };

  const isStreetAddressValid = () => {
    // Street Address Validation
    return true;
  };

  const isCityValid = () => {
    // City Validation
    return true;
  };

  const isCountryValid = () => {
    // Country Validation
    return true;
  };

  const isContactNameValid = () => {
    // Contact Name Validation
    return true;
  };

  const isPositionValid = () => {
    // Position Validation
    return true;
  };

  const isPhoneNumber = () => {
    // Phone Number Validation
    return true;
  };

  const isEmail = () => {
    // Email Validation
    return true;
  };

  const isFormValid = () => {
    // Form validation
    if (
      !isWarehouseNameValid() &&
      !isStreetAddressValid() &&
      !isCityValid() &&
      !isCountryValid() &&
      !isContactNameValid() &&
      !isPositionValid() &&
      !isPhoneNumber() &&
      !isEmail()
    ) {
      return false;
    }

    return true;
  };

  /* Button Handlers */
  const handleCancel = () => {
    // Handle Cancel Form
    setWarehouseName("");
    setStreetAddress("");
    setCity("");
    setCountry("");
    setWareContactName("");
    setPosition("");
    setPhoneNumber("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    // Handle Submit Form
    e.preventDefault();
    if (isFormValid()) {
      console.log(e.target.elements.Warehouse_Name.value);
      console.log(e.target.elements.Street_Address.value);
      console.log(e.target.elements.City.value);
      console.log(e.target.elements.Country.value);
      console.log(e.target.elements.Contact_Name.value);
      console.log(e.target.elements.Position.value);
      console.log(e.target.elements.Phone_Number.value);
      console.log(e.target.elements.Email.value);

      // Do an update and post request on backend side here
    }
  };

  return (
    <div className="WarehouseDetails">
      <h1 className="WarehouseDetails__header">{title}</h1>
      <form className="WarehouseDetails__form" onSubmit={handleSubmit}>
        <div className="WarehouseDetails__details">
          <h2 className="WarehouseDetails__sub-header">Warehouse Details</h2>
          <Textbox
            label="Warehouse Name"
            name="Warehouse_Name"
            placeholder="Warehouse Name"
            onchange={handleWarehouseNameChange}
            value={WarehouseName}
            classname="textbox__warehouse-name"
          />
          <Textbox
            label="Street Address"
            name="Street_Address"
            placeholder="Street Address"
            onchange={handleStreetAddressChange}
            value={StreetAddress}
            classname="textbox__street-address"
          />
          <Textbox
            label="City"
            name="City"
            placeholder="City"
            onchange={handleCityChange}
            value={City}
            classname="textbox__city"
          />
          <Textbox
            label="Country"
            name="Country"
            placeholder="Country"
            onchange={handleCountryChange}
            value={Country}
            classname="textbox__country"
          />
        </div>
        <div className="WarehouseDetails-contact-details">
          <h2 className="WarehouseDetails__sub-header">Contact Details</h2>
          <Textbox
            label="Contact Name"
            name="Contact_Name"
            placeholder="Contact Name"
            onchange={handleContactNameChange}
            value={ContactName}
            classname="textbox__contact-name"
          />
          <Textbox
            label="Position"
            name="Position"
            placeholder="Position"
            onchange={handlePositionChange}
            value={Position}
            classname="textbox__position"
          />
          <Textbox
            label="Phone Number"
            name="Phone_Number"
            placeholder="Phone Number"
            onchange={handlePhoneNumberChange}
            value={PhoneNumber}
            classname="textbox__phone-number"
          />
          <Textbox
            label="Email"
            name="Email"
            placeholder="Email"
            onchange={handleEmailChange}
            value={Email}
            classname="textbox__email"
          />
        </div>
        <button
          className="WarehouseDetails__cancel"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button className="WarehouseDetails__action" type="submit">
          {buttonTitle}
        </button>
      </form>
    </div>
  );
};

export default WarehouseDetails;
