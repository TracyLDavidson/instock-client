import "./WarehousesEditAddPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Paper } from "../../components/Paper/Paper";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  postSingleWarehouse,
  putSingleWarehouse,
} from "../../utils/apiUtils.mjs";

export default function Warehouse() {
  /* useStates Variables */
  // const [SelectedWarehouse, setSelectedWarehouse] = useState(null);

  /* Variables */
  const { warehouseID } = useParams(); // Grabs current ID from URL

  /* Functions */
  const postSingleWarehouseFunction = async (
    warehouseName,
    streetAddress,
    city,
    country,
    contactName,
    position,
    phoneNumber,
    email
  ) =>
    // Function to add warehouse onto server
    {
      try {
        const { data } = await postSingleWarehouse(
          warehouseName,
          streetAddress,
          city,
          country,
          contactName,
          position,
          phoneNumber,
          email
        );
        // console.log(data);
      } catch (err) {
        alert("ERROR 404\nVideo not found... Redirecting to Home Page");
        Navigate("/");
      }
    };

  const putSingleWarehouseFunction = async (
    warehouseName,
    streetAddress,
    city,
    country,
    contactName,
    position,
    phoneNumber,
    email
  ) =>
    // Function to edit warehouse onto server
    {
      try {
        const { data } = await putSingleWarehouse(
          warehouseID,
          warehouseName,
          streetAddress,
          city,
          country,
          contactName,
          position,
          phoneNumber,
          email
        );
        // console.log(data);
      } catch (err) {
        alert("ERROR 404\nVideo not found... Redirecting to Home Page");
        Navigate("/");
      }
    };

  const titleSwitch = () => {
    if (warehouseID === undefined) {
      return "Add Warehouse";
    } else {
      return "Edit Warehouse";
    }
  };

  const buttonSwitch = () => {
    if (warehouseID === undefined) {
      return "+Add Warehouse";
    } else {
      return "Edit";
    }
  };

  const actionFunction = () => {
    if (warehouseID === undefined) {
      return postSingleWarehouseFunction;
    } else {
      return putSingleWarehouseFunction;
    }
  };

  /* Start of code */
  return (
    <div className="warehouses_page">
      <div className="warehouses_page__container">
        <Paper>
          <WarehouseDetails
            title={titleSwitch()}
            buttonTitle={buttonSwitch()}
            actionFunction={actionFunction()}
          />
        </Paper>
      </div>
    </div>
  );
}
