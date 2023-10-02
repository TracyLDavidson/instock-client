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
  return axios.post(`${API_URL}/warehouses/add`, {
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
  return axios.put(`${API_URL}/warehouses/${warehouseID}/edit`, {
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
  return axios.delete(`${API_URL}/warehouses/${warehouseID}`);
};

export {
  fetchAllWarehouses,
  fetchSingleWarehouse,
  fetchWarehouseInventory,
  fetchInventory,
  fetchSingleInventory,
  deleteWarehouseId,
  postSingleWarehouse,
  putSingleWarehouse,
  deleteSingleWarehouse,
};
