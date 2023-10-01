import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const fetchAllWarehouses = async () => {
  try {
    return await axios.get(`${API_URL}/warehouses`);
  } catch (e) {
    return Promise.reject(e);
  }
};

export { fetchAllWarehouses };
