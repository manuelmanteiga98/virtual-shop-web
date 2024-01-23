import React from "react";
import Listitem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { isEmptyList, selectFilteredItems } from "../selectors";
import { getItemsFromFirestore } from "../../backend/itemsBackend";
import { addCategory, addItem } from "../../../store/itemsSlice";
import InventoryListBar from "./InventoryListBar";

function InventoryList() {
  const empty = useSelector(isEmptyList);
  const filteredList = useSelector(selectFilteredItems);
  const dispatch = useDispatch();

  if (empty) {
    getItemsFromFirestore(
      (item) => dispatch(addItem(item)),
      (category) => dispatch(addCategory(category))
    );
  }
  if (empty || filteredList.length === 0) {
    return (
      <div className="h-100">
        <InventoryListBar />
        <div className="d-flex fs-1 h-100 justify-content-center align-items-center">
          No items to display yet
        </div>
      </div>
    );
  }

  return (
    <div>
      <InventoryListBar />
      <div className="container d-flex item-list">
        {filteredList.map((item) => (
          <Listitem
            id={item.id}
            name={item.name}
            units={item.units}
            imageURL={item.imageURL}
          />
        ))}
      </div>
    </div>
  );
}

export { InventoryList };
