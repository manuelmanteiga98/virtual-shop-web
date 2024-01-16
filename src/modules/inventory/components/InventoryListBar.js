import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../selectors";
import { addItem as addItemBackend } from "../../backend/itemsBackend";
import { addItem } from "../../../store/itemsSlice";
import { Link } from "react-router-dom";

const InventoryListBar = () => {
  const [itemID, setItemID] = useState(null);
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const [itemUnits, setItemUnits] = useState(0);
  const [itemUnitsLimit, setItemUnitsLimit] = useState(null);
  const [itemImage, setItemImage] = useState(null);
  var categories = useSelector(getCategories);
  categories = categories.filter((category) => category !== "-");
  if (!categories.includes("Genérico")) categories.unshift("Genérico");
  const [itemCategory, setItemCategory] = useState(categories[0]);

  const dispatch = useDispatch();

  const categoryHandler = (e) => {
    setItemCategory(e.target.value);
  };

  const handleSubmit = () => {
    addItemBackend(
      itemID,
      itemName,
      itemCategory,
      itemCost,
      itemPrice,
      itemUnits,
      itemUnitsLimit,
      itemImage,
      (item) => dispatch(addItem(item))
    );
  };

  const addItemModalBody = (
    <div class="modal-body">
      ID:
      <input
        required
        className="w-100 m-2"
        placeholder="ID"
        value={itemID}
        onChange={(e) => setItemID(e.target.value)}
      ></input>
      Name:
      <input
        required
        className="w-100 m-2"
        placeholder="Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      ></input>
      Category:
      <select
        required
        id="categorySelector"
        className="form-select"
        aria-label="Category selector"
        onChange={categoryHandler}
      >
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      Cost:
      <input
        required
        className="w-100 m-2"
        type="number"
        step="0.01"
        value={itemCost}
        onChange={(e) => (e !== null ? setItemCost(e.target.value) : "")}
      ></input>
      Price:
      <input
        required
        className="w-100 m-2"
        type="number"
        step="0.01"
        value={itemPrice}
        onChange={(e) => (e !== null ? setItemPrice(e.target.value) : "")}
      ></input>
      Units:
      <input
        required
        className="w-100 m-2"
        type="number"
        placeholder="0"
        step="1"
        value={itemUnits}
        onChange={(e) => (e !== null ? setItemUnits(e.target.value) : "")}
      ></input>
      Units limit (optional):
      <input
        className="w-100 m-2"
        type="number"
        step="1"
        value={itemUnitsLimit}
        onChange={(e) => setItemUnitsLimit(e.target.value)}
      ></input>
      <div class="mb-3">
        <label htmlFor="customFile" class="form-label">
          Select an image (Optional)
        </label>
        <input
          type="file"
          accept="image/*"
          class="form-control"
          onChange={(e) =>
            e.target.files
              ? setItemImage(e.target.files[0])
              : setItemImage(null)
          }
          id="customFile"
        />
      </div>
    </div>
  );

  return (
    <div className="container mw-75">
      <button
        className="btn btn-success w-50"
        data-bs-toggle="modal"
        data-bs-target="#addItemModal"
      >
        Add Item
      </button>
      <div
        class="modal fade"
        id="addItemModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add item dialog
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {addItemModalBody}
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Add Item
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/items/categories">
        <button className="btn btn-warning w-50">Manage Categories</button>´
      </Link>
    </div>
  );
};

export default InventoryListBar;
