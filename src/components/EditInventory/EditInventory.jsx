export default function EditInventory() {
    return (
      <>
        <div className="title">
          <h1 className="title__text">Edit Inventory Item</h1>
        </div>
        <div className="details">
          <h2 className="details__title">Item Details</h2>
              <form>
                  <label>Item Name</label>
                  <input></input>
                  <label>Description</label>
                  <input></input>
                  <label>Category</label>
  
              </form>
        </div>
      </>
    );
  }