import axios from "axios";

const API_URL = "http://localhost";
const API_PORT = "8080";

const fetchSingleWarehouse = async (warehouseID) => {
  return axios.get(`${API_URL}:${API_PORT}/warehouses/${warehouseID}`);
};

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

const deleteSingleWarehouse = async (warehouseID) => {
  return axios.delete(`${API_URL}:${API_PORT}/warehouses/${warehouseID}`);
};

export {
  fetchSingleWarehouse,
  postSingleWarehouse,
  putSingleWarehouse,
  deleteSingleWarehouse,
};

