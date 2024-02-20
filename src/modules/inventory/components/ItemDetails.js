import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getList } from "../selectors";
import styles from "../inventory.module.css";

const ItemDetails = () => {
  const { itemID } = useParams();
  const list = useSelector(getList);
  const item = list.find((item) => item.id === itemID);
  if (!item) return <div>Error</div>;
  return (
    <div className={styles.itemDetailsAll}>
      <img
        className={styles.itemDetailsPhoto}
        src={
          item.imageURL ||
          "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png"
        }
      />
      <div>
        <div className="item-details-main">
          <div className="d-flex align-items-center">
            <h2>Item's id: </h2>
            <div className={styles.itemDetailsField}>{item.id} </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>Item's name: </h2>
            <div className={styles.itemDetailsField}>{item.name} </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>Item's units: </h2>
            <div className={styles.itemDetailsField}>{item.units} </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>Item's category: </h2>
            <div className={styles.itemDetailsField}>{item.category} </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>Item's cost: </h2>
            <div className={styles.itemDetailsField}>{item.cost} </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>Item's price: </h2>
            <div className={styles.itemDetailsField}>{item.price} </div>
          </div>
          {item.units_limit && (
            <div className="d-flex align-items-center">
              <h2>Item's units_limit: </h2>
              <div className={styles.itemDetailsField}>{item.units_limit} </div>
            </div>
          )}
        </div>
        <Link to="/items">
          <button className={`btn btn-success ${styles.itemDetailsBack}`}>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export { ItemDetails };
