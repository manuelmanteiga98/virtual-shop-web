import React from "react";
import styles from "../sales.module.css";

const SaleItem = (props) => {
  const { id, units, image } = props;
  return (
    <div className={`card ${styles.item}`}>
      <img
        className="card-img-top"
        src={
          image ||
          "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png"
        }
      />
      <div>
        <div className={`d-flex align-items-center ${styles.itemInfo}`}>
          <h5>Item's id:</h5>
          <h5 className={styles.itemID}>{id}</h5>
        </div>
        <div className={`d-flex align-items-center ${styles.itemInfo}`}>
          <h5>Units:</h5>
          <h5 className={styles.itemID}>{units}</h5>
        </div>
      </div>
    </div>
  );
};

export { SaleItem };
