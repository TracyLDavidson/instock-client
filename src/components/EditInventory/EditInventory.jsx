import "./EditInventory.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/icons/back-arrow.svg";



export default function EditInventory() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const { id } = useParams();
  const url = `http://localhost:8080`;

  useEffect(() => {
    console.log("id is:", id)
    axios
      .get(`${url}/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/warehouses`)
      .then((response) => {
        const data = response.data;
        setWarehouses(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // fetch data from database
  useEffect(() => {
    axios
      .get(`${url}/inventory/${id}`)
      .then((response) => {
        console.log(response.data[0]);
        const data = response.data[0];
        setItemName(data.item_name);
        setItemDescription(data.description);
        setSelectedCategory(data.category);
        setSelectedWarehouse(data.warehouse_id);
        if (data.status === "In Stock") {
          setStatus("In Stock");
        } else if (data.status === "Out of Stock") {
          setStatus("Out of Stock");
        }
        setQuantity(data.quantity);
      })
      .catch((error) => {
        console.error("Error from EditInventory:", error);
      });
  }, []);

  // Event Handlers
  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleItemDescriptionChange = (e) => {
    setItemDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleWarehouseChange = (e) => {
    setSelectedWarehouse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedInventory = {
      item_name: itemName,
      description: itemDescription,
      status: status, 
      quantity: parseInt(quantity, 10),
      category: selectedCategory,
      warehouse_id: selectedWarehouse,
    };

    axios
    .post(`${url}/inventory/${id}/edit`, updatedInventory)
    .then((response) => {
      console.log("Item updated sucessfully:", response.data);
    })
    .catch((error) => {
      console.error('error updating item:', error);
    })
  }

  return (
    <div className="edit-container">
      <div className="title">
        <img className="title__img" />
        <img
          src={backArrow}
          alt="back arrow"
          className="title__img"
        />
        <h1 className="title__text">Edit Inventory Item</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="details">
          <h2 className="details__title">Item Details</h2>
          <label className="label">Item Name</label>
          <input
            placeholder="Item Name"
            name="item-name"
            value={itemName}
            onChange={handleItemNameChange}
            className="input-item"
          ></input>
          <label className="label">Description</label>
          <input
            placeholder="Please enter a brief item description..."
            name="item-description"
            value={itemDescription}
            onChange={handleItemDescriptionChange}
            className="input-description"
          ></input>
          <label className="label" htmlFor="categorySelect">
            Category
          </label>
          <select
            id="categorySelect"
            name="categorySelect"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="select-category"
          >
            <option value="">Please select</option>
            {categories.map((category) => (
              <option key={category.category} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
        <div className="availability">
          <h2 className="availability__title">Item Availability</h2>
          <h3 className="label">Status</h3>
          <div className="availability__status">
            <input
              id="inStock"
              name="status"
              type="radio"
              value="In Stock"
              checked={status === "In Stock"}
              onChange={handleStatusChange}
            ></input>
            <label htmlFor="inStock">In stock</label>
            <input
              id="outOfStock"
              name="status"
              type="radio"
              value="Out of Stock"
              checked={status === "Out of Stock"}
              onChange={handleStatusChange}
            ></input>
            <label htmlFor="outOfStock">Out of stock</label>
          </div>
          <label htmlFor="quantityInput" className="label label--quantity">
            Quantity
          </label>
          <input
            id="quantityInput"
            name="quantityInput"
            className="input-quantity"
            value={quantity}
            onChange={handleQuantityChange}
          ></input>
          <label htmlFor="warehouseSelect" className="label">
            Warehouse
          </label>
          <select
            id="warehouseSelect"
            name="warehouseSelect"
            value={selectedWarehouse}
            onChange={handleWarehouseChange}
            className="select-warehouse"
          >
            <option value="">Please select</option>
            {warehouses.map((warehouse) => (
              <option
                key={warehouse.id}
                value={warehouse.id}
              >
                {warehouse.warehouse_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="button">Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
