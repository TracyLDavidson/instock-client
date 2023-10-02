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
const fetchInventory = async () => {
  try {
    return await axios.get(`${API_URL}/inventory`);
  } catch (e) {
    return Promise.reject(e);
  }
};

const fetchSingleInventory = async (inventoryId) => {
  try {
    return await axios.get(`${API_URL}/inventory/${inventoryId}`);
  } catch (e) {
    console.log("Unable to fetch inventory item");
  }
};

const deleteWarehouseId = async (warehouseID) => {
  try {
    const { data } = await axios.get(`${API_URL}/warehouses/${warehouseID}`);
    return data;
  } catch (error) {
    console.log("Unable to delete this warehouse");
  }
};

export {
  fetchAllWarehouses,
  fetchSingleWarehouse,
  fetchWarehouseInventory,
  fetchInventory,
  fetchSingleInventory,
  deleteWarehouseId,
};
