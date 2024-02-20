import { React, useEffect } from "react";
import Listitem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredItems } from "../selectors";
import { getItems as getItemsBackend } from "../../backend/itemsBackend";
import { addCategory, addItem } from "../../../store/itemsSlice";
import InventoryListBar from "./InventoryListBar";
import styles from "../inventory.module.css";

function InventoryList() {
  const filteredList = useSelector(selectFilteredItems);
  const dispatch = useDispatch();

  useEffect(() => {
    getItemsBackend(
      (item) => dispatch(addItem(item)),
      (category) => dispatch(addCategory(category))
    );
  }, []);

  if (filteredList.length === 0) {
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
      <div className={`container d-flex ${styles.itemlist}`}>
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
