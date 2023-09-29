import "./EditInventory.scss";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditInventory() {

  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [status, setStatus] = useState('');
  const [quantity, setQuantity] = useState('');

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/categories')
    .then((response) => {
      setCategories(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedItem(e.target.value)
  }

  // fetch data from database
  useEffect(() => {
    axios.get('http://localhost:8080/inventory/1')
    .then((response) => {
      console.log(response.data[0]);
      const data = response.data[0];

      setItemName(data.item_name);
      setItemDescription(data.description);
      setSelectedCategory(data.category); // add category here
      
      if (data.status === 'In Stock') {
        setStatus('inStock');
      } else if (data.status === 'Out of Stock') { // CHECK SPELLING
        setStatus('outOfStock');
      }

      setQuantity(data.quantity);
      
    }).catch((error) => {
      console.error('Error from EditInventory:', error);
    });
  }, []);

  // Event Handlers
  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleItemDescriptionChange = (e) => {
    setItemDescription(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

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
            // placeholder="Please select"
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
            value="inStock"
            checked={status === 'inStock'}
            onChange={handleStatusChange}
            ></input>
            <label htmlFor="inStock">In stock</label>
            <input 
            id="outOfStock" 
            name="status" 
            type="radio" 
            value="outOfStock"
            checked={status === 'outOfStock'}
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
            placeholder="Please select"
            className="select-warehouse"
          ></select>
        </div>
      </form>
    </>
  );
}
