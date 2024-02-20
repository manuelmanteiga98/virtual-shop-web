import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrentSale } from "../selectors";
import { getSaleItems } from "../../backend/salesBackend";
import { addItemToSale, initialize } from "../../../store/salesSlice";
import { SaleItem } from "./SaleItem";
import styles from "../sales.module.css";

const Sale = () => {
  const { saleID } = useParams();
  const currentSale = useSelector(getCurrentSale);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
    getSaleItems(saleID, (item) => dispatch(addItemToSale(item)));
  }, []);

  if (currentSale.length === 0)
    return (
      <div className="d-flex fs-1 h-100 justify-content-center align-items-center">
        No items yet
      </div>
    );

  return (
    <div>
      <div className={styles.header}>
        <button className="btn btn-primary">Add Item</button>
      </div>
      <div className="d-flex">
        {currentSale.map((item) => {
          return (
            <SaleItem id={item.id} units={item.units} image={item.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Sale;
