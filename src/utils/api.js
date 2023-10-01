import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const fetchAllWarehouses = async () => {
  try {
    return await axios.get(`${API_URL}/warehouses`);
  } catch (e) {
    return Promise.reject(e);
  }
};
const fetchSingleWarehouse = async (id) => {
  try {
    return await axios.get(`${API_URL}/warehouses/${id}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

const fetchWarehouseInventory = async (warehouseId) => {
  try {
    return await axios.get(`${API_URL}/inventory/warehouse/${warehouseId}`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export { fetchAllWarehouses, fetchSingleWarehouse, fetchWarehouseInventory };
