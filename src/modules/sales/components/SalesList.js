import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../selectors";
import { getSalesFromFirestore } from "../../backend/salesBackend";
import { addSale } from "../../../store/salesSlice";
import { Link } from "react-router-dom";
import styles from "../sales.module.css";

const SalesList = () => {
  const dispatch = useDispatch();
  const salesList = useSelector(getSales);

  if (!salesList.length) {
    getSalesFromFirestore((sale) => dispatch(addSale(sale)));
    return (
      <div className="d-flex fs-1 h-100 justify-content-center align-items-center">
        No sales yet
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center align-items-center mw-100 vh-100">
      <div>
        {salesList.map((sale) => (
          <Link to={`/sales/${sale.id}`}>
            <div className={styles.selection} key={sale.id}>
              {sale.date}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SalesList;
