// import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseInventoryPage from "./pages/WarehouseInventoryPage/WarehouseInventoryPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditInventory from "./components/EditInventory/EditInventory";
import WarehouseEditAddPage from "./pages/WarehousesEditAddPage/WarehousesEditAddPage";

function App() {
  const [inventoryList, setInventoryList] = useState([]); //temporary solution in order useParams with edit
  const query = "inventory/";
  const id = "";
  const url = `http://localhost:8080/${query}${id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setInventoryList(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);
  // Commented out because it breaks my code
  // if (!inventoryList.length) {
  //   return <>Loading...</>;
  // }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<WarehousesPage />} /> */}
        <Route path="/" element={<Navigate to={`/warehouses`} />} />
        <Route path="/warehouses" element={<WarehousesPage />} />
        <Route
          path="/warehouses/:warehouseId"
          element={<WarehouseInventoryPage />}
        />
        {/* <Route
          path="/warehouse/:id/edit"
          element={<WarehousesPage warehouse={warehouse} />}
        /> */}
        {/* <Route
          path="/warehouse/:id"
          element={<WarehousesPage warehouse={warehouse} />}
        /> */}
        <Route
          path="/warehouses/:warehouseID/edit"
          element={<WarehouseEditAddPage />}
        />
        <Route path="/warehouses/add" element={<WarehouseEditAddPage />} />
        {/* should we leave the following in? discuss with group */}
        {/* <Route path="/inventory" element={<InventoryPage />} /> */}
        <Route
          path="/inventory"
          element={<Navigate to={`/inventory/${inventoryList[0]?.id}/edit`} />}
        />
        {/* <Route path="/inventory/:id" element={<InventoryPage item={item} />} /> */}
        <Route path="inventory/:id/edit" element={<EditInventory />} />
        <Route
          path="inventory/:id/view"
          element={() => <p>Inventory View Item</p>}
        />
        {/* should we leave the following in? discuss with group */}
        {/* <Route path="inventory/add" element={<InventoryPage item={item} />} /> */}
        {/* <Route path="inventory/add" element={<EditInventory />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
