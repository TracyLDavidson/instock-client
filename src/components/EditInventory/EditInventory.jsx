export default function EditInventory() {
  return (
    <>
      <div className="title">
        <h1 className="title__text">Edit Inventory Item</h1>
      </div>
      <form className="form">
        <div className="details">
          <h2 className="details__title">Item Details</h2>
          <label>Item Name</label>
          <input
            placeholder="Item Name"
            name="item-name"
            value={itemName}
            onChange={handleItemName}
          ></input>
          <label>Description</label>
          <textarea
            placeholder="Please enter a brief item description..."
            name="item-description"
            value={itemDesc}
            onChange={handleItemDesc}
          ></textarea>
          <label>Category</label>
        </div>
        <div className="availablity">
          <h2 className="availability__title">Item Availability</h2>
          <h3>Status</h3>
            <input id="inStock" name="status" type="radio" value=""></input>
            <label for="inStock">In stock</label>
            <input id="outOfStock" name="status" type="radio" value=""></input>
            <label for="outOfStock">Out of stock</label>
        </div>
      </form>
    </>
  );
}

className = "title-input";
placeholder = "Add a title to your video";
name = "title";
value = { title };
onChange = { handleTitle };
