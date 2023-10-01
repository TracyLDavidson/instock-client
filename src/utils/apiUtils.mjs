import axios from "axios";

// const { REACT_APP_API_URL, REACT_APP_API_PORT } = process.env;
const API_URL = "http://localhost";
const API_PORT = "8080";

const postSingleWarehouse = async (
  warehouse_name,
  address,
  city,
  country,
  contact_name,
  contact_position,
  contact_phone,
  contact_email
) => {
  console.log(warehouse_name);
  console.log(address);
  console.log(city);
  console.log(country);
  console.log(contact_name);
  console.log(contact_position);
  console.log(contact_phone);
  console.log(contact_email);
  return axios.post(`${API_URL}:${API_PORT}/warehouses/add`, {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  });
};

const putSingleWarehouse = async (
  warehouseID,
  warehouse_name,
  address,
  city,
  country,
  contact_name,
  contact_position,
  contact_phone,
  contact_email
) => {
  console.log(warehouse_name);
  console.log(address);
  console.log(city);
  console.log(country);
  console.log(contact_name);
  console.log(contact_position);
  console.log(contact_phone);
  console.log(contact_email);
  return axios.put(`${API_URL}:${API_PORT}/warehouses/${warehouseID}/edit`, {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  });
};

export { postSingleWarehouse, putSingleWarehouse };
