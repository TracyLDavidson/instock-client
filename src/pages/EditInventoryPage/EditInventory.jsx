import "./EditInventory.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/icons/back-arrow.svg";
import { Paper } from "../../components/Paper/Paper";

export default function EditInventory({ mode }) {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const [itemNameError, setItemNameError] = useState("");
  const [itemDescriptionError, setItemDescriptionError] = useState("");
  const [selectedCategoryError, setSelectedCategoryError] = useState("");
  const [selectedWarehouseError, setSelectedWarehouseError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const { id } = useParams();
  const url = `http://localhost:8080`;

  useEffect(() => {
    console.log("id is:", id);
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

  // fetch data from database    //// edit for add vs. edit
  useEffect(() => {
    if (mode === "edit") {
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
          console.error("Error from EditInventory GET:", error);
        });
    } else if (mode === "add") {
      setStatus("In Stock");
      setQuantity(1);
    }
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

  const validateForm = () => {
    let hasError = false;

    // Validate Item Name
    if (itemName.trim().length < 1) {
      setItemNameError("This field is required");
      hasError = true;
    } else {
      setItemNameError("");
    }

    // Validate Item Description
    if (itemDescription.trim().length < 1) {
      setItemDescriptionError("This field is required");
      hasError = true;
    } else {
      setItemDescriptionError("");
    }

    // Validate Selected Category
    if (!selectedCategory) {
      setSelectedCategoryError("Please select a category.");
      hasError = true;
    } else {
      setSelectedCategoryError("");
    }

    // Validate Selected Warehouse
    if (!selectedWarehouse) {
      setSelectedWarehouseError("Please select a warehouse.");
      hasError = true;
    } else {
      setSelectedWarehouseError("");
    }

    // Validate Quantity and Status
    if (isNaN(quantity) || quantity <= 0) {
      setStatus("Out of Stock");
      setQuantityError("Quantity must be a number greater than 0");
      hasError = true;
    } else {
      setStatus("In Stock");
      setQuantityError("");
    }

    return !hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedInventory = {
        item_name: itemName,
        description: itemDescription,
        status: status,
        quantity: parseInt(quantity, 10),
        category: selectedCategory,
        warehouse_id: selectedWarehouse,
      };

      if (mode === "edit") {
        axios
          .post(`${url}/inventory/${id}/edit`, updatedInventory)
          .then((response) => {
            console.log("Item updated sucessfully:", response.data);
          })
          .catch((error) => {
            console.error("error updating item:", error);
          });
      } else if (mode === "add") {
        axios
          .post(`${url}/inventory/add`, updatedInventory)
          .then((response) => {
            console.log("Successfully added item:", response.data);
            history.push("/inventory/add");
          })
          .catch((error) => {
            console.error("Error adding item:", error);
          });
      }
    }
  };

  const submitButton = (
    <button
      className={`btn-style btn-submit`}
      type="submit"
    >
      {mode === "add" ? "+ Add Item" : "Save"}
    </button>
  );

  const cancelButton = (
    <button className="btn-style btn-cancel" type="button">
      Cancel
    </button>
  );

  return (
    <div className="edit-container">
      <Paper>
        <div className="title">
          <img src={backArrow} alt="back arrow" className="title__img" />
          <h1 className="title__text">
            {mode === "add" ? "Add Inventory Item" : "Edit Inventory Item"}
          </h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-flex">
            <div className="details">
              <h2 className="details__title">Item Details</h2>
              <label className="label">Item Name</label>
              <input
                placeholder="Item Name"
                name="item-name"
                value={itemName}
                onChange={handleItemNameChange}
                className={`input input-item ${itemNameError ? 'error' : ''}`}
              ></input>
              {itemNameError && (
                <div className="error-message">{itemNameError}</div>
              )}
              <label className="label">Description</label>
              <textarea
                placeholder="Please enter a brief item description..."
                name="item-description"
                value={itemDescription}
                onChange={handleItemDescriptionChange}
                className={`input input-description ${itemDescriptionError ? 'error' : ''}`}
              ></textarea>
              {itemDescriptionError && (
                <div className="error-message">{itemDescriptionError}</div>
              )}
              <label className="label" htmlFor="categorySelect">
                Category
              </label>
              <select
                id="categorySelect"
                name="categorySelect"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className={`input select-item select-category ${selectedCategoryError ? 'error' : ''}`}
              >
                <option value="">Please select</option>
                {categories.map((category) => (
                  <option key={category.category} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
              {selectedCategoryError && (
                <div className="error-message">{selectedCategoryError}</div>
              )}
            </div>
            <div className="availability">
              <h2 className="availability__title">Item Availability</h2>
              <h3 className="label">Status</h3>
              <div className="input availability__status">
                <div className="status-container">
                  <input
                    id="inStock"
                    name="status"
                    type="radio"
                    value="In Stock"
                    checked={status === "In Stock"}
                    onChange={handleStatusChange}
                    className="radio-item"
                  ></input>
                  <label htmlFor="inStock" className="radio-item__text">
                    In stock
                  </label>
                </div>
                <div className="status-container">
                  <input
                    id="outOfStock"
                    name="status"
                    type="radio"
                    value="Out of Stock"
                    checked={status === "Out of Stock"}
                    onChange={handleStatusChange}
                    className="radio-item"
                  ></input>
                  <label htmlFor="outOfStock" className="radio-item__text">
                    Out of stock
                  </label>
                </div>
              </div>
              {status !== "Out of Stock" && (
                <div className="availability__quantity">
                  <label
                    htmlFor="quantityInput"
                    className="label label--quantity"
                  >
                    Quantity
                  </label>
                  <input
                    id="quantityInput"
                    name="quantityInput"
                    className={`input input-quantity ${quantityError ? 'error' : ''}`}
                    value={quantity}
                    onChange={handleQuantityChange}
                  ></input>
                  {quantityError && (
                    <div className="error-message">{quantityError}</div>
                  )}
                </div>
              )}
              <label htmlFor="warehouseSelect" className="label">
                Warehouse
              </label>
              <select
                id="warehouseSelect"
                name="warehouseSelect"
                value={selectedWarehouse}
                onChange={handleWarehouseChange}
                className={`input select-item select-warehouse ${quantityError ? 'error' : ''}`}
              >
                <option value="">Please select</option>
                {warehouses.map((warehouse) => (
                  <option key={warehouse.id} value={warehouse.id}>
                    {warehouse.warehouse_name}
                  </option>
                ))}
              </select>
              {selectedWarehouseError && (
                    <div className="error-message">{selectedWarehouseError}</div>
                  )}
            </div>
          </div>
          <div className="button-container">
            {submitButton}
            {cancelButton}
            {/* <button className="btn-style btn-cancel" type="button">Cancel</button> */}
            {/* <button className="btn-style btn-submit" type="submit">Submit</button> */}
          </div>
        </form>
      </Paper>
    </div>
  );
}
