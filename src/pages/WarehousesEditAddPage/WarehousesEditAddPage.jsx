import "./WarehousesEditAddPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Paper } from "../../components/Paper/Paper";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  fetchSingleWarehouse,
  postSingleWarehouse,
  putSingleWarehouse,
} from "../../utils/api.js";

export default function Warehouse() {
  /* useStates Variables */
  const [SelectedWarehouse, setSelectedWarehouse] = useState(null);
  const Navigate = useNavigate();

  /* Variables */
  const { warehouseID } = useParams(); // Grabs current ID from URL

  /* Functions */
  const fetchSingleWarehouseFunction = async () => {
    // Function to fetch data based on ID in URL page
    try {
      const { data } = await fetchSingleWarehouse(warehouseID);
      setSelectedWarehouse(data[0]);
    } catch (error) {
      Navigate("/");
    }
  };

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
      } catch (err) {
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

  useEffect(() => {
    // Invoke axios to retrieve data from specific ID
    if (warehouseID !== undefined) {
      fetchSingleWarehouseFunction();
    }
  }, [warehouseID]);

  if (!SelectedWarehouse && warehouseID) {
    return <p>Loading</p>;
  }

  if (!SelectedWarehouse) {
    setSelectedWarehouse({
      warehouse_name: "",
      address: "",
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: "",
    });
  }

  return (
    <div className="warehouses__edit-add-page">
      <div className="warehouses__edit-add-page-container">
        <Paper>
          <WarehouseDetails
            title={titleSwitch()}
            buttonTitle={buttonSwitch()}
            actionFunction={actionFunction()}
            selectedWarehouse={SelectedWarehouse}
          />
        </Paper>
      </div>
    </div>
  );
}
