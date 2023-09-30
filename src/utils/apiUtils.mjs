import axios from "axios";

const { REACT_APP_API_URL, REACT_APP_API_PORT } = process.env;
const API_URL = "http://localhost";
const API_PORT = "5050";

const fetchSingleWarehouse = async (id) => {
  return axios.get(`${API_URL}:${API_PORT}/warehouse/${id}`);
};

const postSingleWarehouse = async (
  warehouseID,
  warehouseName,
  streetAddress,
  city,
  country,
  contactName,
  position,
  phoneNumber,
  email
) => {
  return axios.post(`${API_URL}:${API_PORT}/warehouse`, {
    warehouseName,
    streetAddress,
    city,
    country,
    contactName,
    position,
    phoneNumber,
    email,
  });
};

const putSingleWarehouse = async (
  warehouseID,
  warehouseName,
  streetAddress,
  city,
  country,
  contactName,
  position,
  phoneNumber,
  email
) => {
  return axios.put(`${API_URL}:${API_PORT}/warehouse/${warehouseID}/edit`, {
    warehouseName,
    streetAddress,
    city,
    country,
    contactName,
    position,
    phoneNumber,
    email,
  });
};

export { fetchSingleWarehouse, postSingleWarehouse, putSingleWarehouse };
