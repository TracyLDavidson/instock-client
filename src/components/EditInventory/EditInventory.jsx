import "./EditInventory.scss";
import { useState, useEffect } from 'react';
// import axios from axios;

export default function EditInventory() {

  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [status, setStatus] = useState('');
  const [quantity, setQuantity] = useState('');

  // fetch data from database
  // useEffect(() => {
  //   axios.get('http://localhost:8080/inventory/1')
  // })

  return (
    <>
      <div className="title">
        <img className="title__img" />
        <h1 className="title__text">Edit Inventory Item</h1>
      </div>
      <form className="form">
        <div className="details">
          <h2 className="details__title">Item Details</h2>
          <label className="label">Item Name</label>
          <input
            placeholder="Item Name"
            name="item-name"
            // value={itemName}
            // onChange={handleItemName}
            className="input-item"
          ></input>
          <label className="label">Description</label>
          <input
            placeholder="Please enter a brief item description..."
            name="item-description"
            // value={itemDesc}
            // onChange={handleItemDesc}
            className="input-description"
          ></input>
          <label className="label" for="categorySelect">
            Category
          </label>
          <select
            id="categorySelect"
            name="categorySelect"
            placeholder="Please select"
            className="select-category"
          ></select>
        </div>
        <div className="availability">
          <h2 className="availability__title">Item Availability</h2>
          <h3 className="label">Status</h3>
          <div className="availability__status">
            <input id="inStock" name="status" type="radio" value=""></input>
            <label for="inStock">In stock</label>
            <input id="outOfStock" name="status" type="radio" value=""></input>
            <label for="outOfStock">Out of stock</label>
          </div>
          <label for="quantityInput" className="label label--quantity">
            Quantity
          </label>
          <input
            id="quantityInput"
            name="quantityInput"
            className="input-quantity"
          ></input>
          <label for="warehouseSelect" className="label">
            Warehouse
          </label>
          <select
            id="warehouseSelect"
            name="warehouseSelect"
            placeholder="Please select"
            className="select-warehouse"
          ></select>
        </div>
      </form>
    </>
  );
}
