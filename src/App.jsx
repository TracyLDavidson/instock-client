// import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditInventory from "./components/EditInventory/EditInventory";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        {/* <Route path="/" element={<Navigate to={<WarehousesPage />} />} /> */}
        <Route path="/warehouse" element={<WarehousesPage />} />
        {/* <Route
          path="/warehouse/:id/edit"
          element={<WarehousesPage warehouse={warehouse} />}
        /> */}
        {/* <Route
          path="/warehouse/:id"
          element={<WarehousesPage warehouse={warehouse} />}
        /> */}
        {/* should we leave the following in? discuss with group */}
        {/* <Route path="warehouse/add" element={<WarehousesPage />} /> */}
        <Route path="/inventory" element={<InventoryPage />} />
        {/* <Route path="/inventory/:id" element={<InventoryPage item={item} />} /> */}
        {/* <Route
          path="inventory/:id/edit"
          element={<InventoryPage item={item} />}
        /> */}
        {/* should we leave the following in? discuss with group */}
        {/* <Route path="inventory/add" element={<InventoryPage item={item} />} /> */}
        <Route path="inventory/add" element={<EditInventory />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;