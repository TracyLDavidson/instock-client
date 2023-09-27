import { useState } from "react";
import "./App.scss";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <>
      <WarehouseDetails title="Edit Warehouse" buttonTitle="Save" />
    </>
  );
}

export default App;
