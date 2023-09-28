// import { useState } from "react";
import "./App.scss";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./components/Header/Header";
// import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
// import InventoryPage from "./pages/InventoryPage/InventoryPage";
// import Footer from "./components/Footer/Footer"; //still need to create this? -EO
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Navigate to={<WarehousesPage />} />} />
    //     <Route path="/warehouse" element={<WarehousesPage />} />
    //     <Route
    //       path="/warehouse/edit/:id"
    //       element={<WarehousesPage warehouse={warehouse} />}
    //     />
    //     <Route
    //       path="/warehouse/:id"
    //       element={<WarehousesPage warehouse={warehouse} />}
    //     />
    //     {/* should we leave the following in? discuss with group */}
    //     <Route path="warehouse/add" element={<WarehousesPage />} />
    //     <Route path="/inventory" element={<InventoryPage />} />
    //     <Route path="/inventory/:id" element={<InventoryPage item={item} />} />
    //     <Route
    //       path="inventory/edit/:id"
    //       element={<InventoryPage item={item} />}
    //     />
    //     {/* should we leave the following in? discuss with group */}
    //     <Route path="inventory/add" element={<InventoryPage item={item} />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <>
      <WarehouseDetails title="Edit Warehouse" buttonTitle="Save" />
    </>
  );
}

export default App;
