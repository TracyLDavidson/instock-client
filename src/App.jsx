// import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseInventoryPage from "./pages/WarehouseInventoryPage/WarehouseInventoryPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditInventory from "./pages/EditInventoryPage/EditInventory";
import WarehouseEditAddPage from "./pages/WarehousesEditAddPage/WarehousesEditAddPage";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to={`/warehouses`} />} />
        <Route path="/warehouses" element={<WarehousesPage />} />
        <Route
          path="/warehouses/:warehouseId"
          element={<WarehouseInventoryPage />}
        />
        <Route
          path="/warehouses/:warehouseID/edit"
          element={<WarehouseEditAddPage />}
        />
        <Route path="/warehouses/add" element={<WarehouseEditAddPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="inventory/:id/edit" element={<EditInventory />} />
        <Route
          path="inventory/:id/view"
          element={() => <p>Inventory View Item</p>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
