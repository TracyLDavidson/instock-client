import React from "react";
import "./WarehouseDetails.scss";
import WareHouseDetailInvalid from "../WarehouseDetailInvalid/WarehouseDetailInvalid";
import Textbox from "../Textbox/Textbox.jsx";
import { useState } from "react";
import backArrow from "../../assets/icons/back-arrow.svg";

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
  const [WarehouseNameSubmit, setWarehouseNameSubmit] = useState(true);
  const [StreetAddressSubmit, setStreetAddressSubmit] = useState(true);
  const [CitySubmit, setCitySubmit] = useState(true);
  const [CountrySubmit, setCountrySubmit] = useState(true);
  const [ContactNameSubmit, setContactNameSubmit] = useState(true);
  const [PositionSubmit, setPositionSubmit] = useState(true);
  const [PhoneNumberSubmit, setPhoneNumberSubmit] = useState(true);
  const [EmailSubmit, setEmailSubmit] = useState(true);

  /* onChange handlers */
  const handleWarehouseNameChange = (e) => {
    setWarehouseNameSubmit(true);
    setWarehouseName(e.target.value);
  };
  const handleStreetAddressChange = (e) => {
    setStreetAddressSubmit(true);
    setStreetAddress(e.target.value);
  };
  const handleCityChange = (e) => {
    setCitySubmit(true);
    setCity(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountrySubmit(true);
    setCountry(e.target.value);
  };
  const handleContactNameChange = (e) => {
    setContactNameSubmit(true);
    setWareContactName(e.target.value);
  };
  const handlePositionChange = (e) => {
    setPositionSubmit(true);
    setPosition(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumberSubmit(true);
    setPhoneNumber(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailSubmit(true);
    setEmail(e.target.value);
  };
  /* Validations */
  const isWarehouseNameValid = () => {
    // Warehouse Name Validation
    if (WarehouseName.length < 10) {
      return false;
    }
    return true;
  };

  const isStreetAddressValid = () => {
    // Street Address Validation
    if (StreetAddress.length < 10) {
      return false;
    }
    return true;
  };

  const isCityValid = () => {
    // City Validation
    if (City.length < 10) {
      return false;
    }
    return true;
  };

  const isCountryValid = () => {
    // Country Validation
    if (Country.length < 10) {
      return false;
    }
    return true;
  };

  const isContactNameValid = () => {
    // Contact Name Validation
    if (ContactName.length < 10) {
      return false;
    }
    return true;
  };

  const isPositionValid = () => {
    // Position Validation
    if (Position.length < 10) {
      return false;
    }
    return true;
  };

  const isPhoneNumberValid = () => {
    // Phone Number Validation
    if (PhoneNumber.length < 10) {
      return false;
    }
    return true;
  };

  const isEmailValid = () => {
    // Email Validation
    if (Email.length < 10) {
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    // Form validation
    if (
      isWarehouseNameValid() &&
      isStreetAddressValid() &&
      isCityValid() &&
      isCountryValid() &&
      isContactNameValid() &&
      isPositionValid() &&
      isPhoneNumberValid() &&
      isEmailValid()
    ) {
      return true;
    }
    return false;
  };

  /* Button Handlers */
  const handleCancel = () => {
    // Handle Cancel Form resets whole form
    setWarehouseName("");
    setStreetAddress("");
    setCity("");
    setCountry("");
    setWareContactName("");
    setPosition("");
    setPhoneNumber("");
    setEmail("");
    setWarehouseNameSubmit(true);
    setStreetAddressSubmit(true);
    setCitySubmit(true);
    setCountrySubmit(true);
    setContactNameSubmit(true);
    setPositionSubmit(true);
    setPhoneNumberSubmit(true);
    setEmailSubmit(true);
  };

  const handleSubmit = (e) => {
    // Handle Submit Form
    e.preventDefault();
    if (!isWarehouseNameValid()) {
      setWarehouseNameSubmit(false);
    } else {
      setWarehouseNameSubmit(true);
    }

    if (!isStreetAddressValid()) {
      setStreetAddressSubmit(false);
    } else {
      setStreetAddressSubmit(true);
    }

    if (!isCityValid()) {
      setCitySubmit(false);
    } else {
      setCitySubmit(true);
    }

    if (!isCountryValid()) {
      setCountrySubmit(false);
    } else {
      setCountrySubmit(true);
    }

    if (!isContactNameValid()) {
      setContactNameSubmit(false);
    } else {
      setContactNameSubmit(true);
    }

    if (!isPositionValid()) {
      setPositionSubmit(false);
    } else {
      setPositionSubmit(true);
    }

    if (!isPhoneNumberValid()) {
      setPhoneNumberSubmit(false);
    } else {
      setPhoneNumberSubmit(true);
    }

    if (!isEmailValid()) {
      setEmailSubmit(false);
    } else {
      setEmailSubmit(true);
    }

    if (isFormValid()) {
      // console.log(e.target.elements.Warehouse_Name.value);
      // console.log(e.target.elements.Street_Address.value);
      // console.log(e.target.elements.City.value);
      // console.log(e.target.elements.Country.value);
      // console.log(e.target.elements.Contact_Name.value);
      // console.log(e.target.elements.Position.value);
      // console.log(e.target.elements.Phone_Number.value);
      // console.log(e.target.elements.Email.value);
      // Do an update and post request on backend side here
      alert("Form Submitted");
    }
  };

  const defaultActiveSwitch = (defaultClass, activeState, state) => {
    if (state.length !== 0) {
      return activeState;
    } else {
      return defaultClass;
    }
  };

  return (
    <div className="WarehouseDetails">
      <div className="WarehouseDetails__header-container">
        <img
          src={backArrow}
          alt="back arrow"
          className="WarehouseDetails__img"
        />
        <h1 className="WarehouseDetails__header">{title}</h1>
      </div>
      <form className="WarehouseDetails__form" onSubmit={handleSubmit}>
        <div className="WarehouseDetails__container">
          <div className="WarehouseDetails__sub-container">
            <h2 className="WarehouseDetails__sub-header">Warehouse Details</h2>
            <Textbox
              label="Warehouse Name"
              name="Warehouse_Name"
              placeholder="Warehouse Name"
              onchange={handleWarehouseNameChange}
              value={WarehouseName}
              classname={`${
                WarehouseNameSubmit
                  ? defaultActiveSwitch(
                      "",
                      "textbox__warehouse-name--active",
                      WarehouseName
                    )
                  : "textbox__warehouse-name--error"
              }`}
            />
            <WareHouseDetailInvalid
              trigger={!WarehouseNameSubmit}
            ></WareHouseDetailInvalid>
            <Textbox
              label="Street Address"
              name="Street_Address"
              placeholder="Street Address"
              onchange={handleStreetAddressChange}
              value={StreetAddress}
              classname={`${
                StreetAddressSubmit
                  ? defaultActiveSwitch(
                      "",
                      "textbox__street-address--active",
                      StreetAddress
                    )
                  : "textbox__street-address--error"
              }`}
            />
            <WareHouseDetailInvalid
              trigger={!StreetAddressSubmit}
            ></WareHouseDetailInvalid>
            <Textbox
              label="City"
              name="City"
              placeholder="City"
              onchange={handleCityChange}
              value={City}
              classname={`${
                CitySubmit
                  ? defaultActiveSwitch("", "textbox__city--active", City)
                  : "textbox__city--error"
              }`}
            />
            <WareHouseDetailInvalid
              trigger={!CitySubmit}
            ></WareHouseDetailInvalid>
            <Textbox
              label="Country"
              name="Country"
              placeholder="Country"
              onchange={handleCountryChange}
              value={Country}
              classname={`${
                CountrySubmit
                  ? defaultActiveSwitch("", "textbox__country--active", Country)
                  : "textbox__country--error"
              }`}
            />
            <WareHouseDetailInvalid
              trigger={!CountrySubmit}
            ></WareHouseDetailInvalid>
          </div>
          <div className="WarehouseDetails__sub-container WarehouseDetails__sub-container--borderline">
            <h2 className="WarehouseDetails__sub-header">Contact Details</h2>
            <Textbox
              label="Contact Name"
              name="Contact_Name"
              placeholder="Contact Name"
              onchange={handleContactNameChange}
              value={ContactName}
              classname={`${
                ContactNameSubmit
                  ? defaultActiveSwitch(
                      "",
                      "textbox__contact-name--active",
                      ContactName
                    )
                  : "textbox__contact-name--error"
              }`}
            />
            <WareHouseDetailInvalid
              trigger={!ContactNameSubmit}
            ></WareHouseDetailInvalid>
            <Textbox
              label="Position"
              name="Position"
              placeholder="Position"
              onchange={handlePositionChange}
              value={Position}
              classname={`${
                PositionSubmit
                  ? defaultActiveSwitch(
                      "",
                      "textbox__position--active",
                      Position
                    )
                  : "textbox__position--error"
              }`}
            />
            <WareHouseDetailInvalid
              trigger={!PositionSubmit}
            ></WareHouseDetailInvalid>
            <Textbox
              label="Phone Number"
              name="Phone_Number"
              placeholder="Phone Number"
              onchange={handlePhoneNumberChange}
              value={PhoneNumber}
              classname={`${
                PhoneNumberSubmit
                  ? defaultActiveSwitch(
                      "",
                      "textbox__phone-number--active",
                      PhoneNumber
                    )
                  : "textbox__phone-number--error"
              }`}
            />
            <WareHouseDetailInvalid
              trigger={!PhoneNumberSubmit}
            ></WareHouseDetailInvalid>
            <Textbox
              label="Email"
              name="Email"
              placeholder="Email"
              onchange={handleEmailChange}
              value={Email}
              classname={`${
                EmailSubmit
                  ? defaultActiveSwitch("", "textbox__email--active", Email)
                  : "textbox__email--error"
              }`}
            />
            <WareHouseDetailInvalid
              trigger={!EmailSubmit}
            ></WareHouseDetailInvalid>
          </div>
        </div>
        <div className="WarehouseDetails__buttons-container">
          <button
            className="WarehouseDetails__cancel-btn"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="WarehouseDetails__action-btn" type="submit">
            {buttonTitle}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WarehouseDetails;
