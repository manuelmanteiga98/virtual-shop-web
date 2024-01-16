import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../selectors";
import { getSalesFromFirestore } from "../../backend/salesBackend";
import { addSale } from "../../../store/salesSlice";

const SalesList = () => {
  const dispatch = useDispatch();
  const salesList = useSelector(getSales);
  if (!salesList.length) {
    getSalesFromFirestore((sale) => dispatch(addSale(sale)));
    return <div>No sales</div>;
  }
  return (
    <div className="d-flex justify-content-center align-items-center mw-100 vh-100">
      <div>
        {salesList.map((sale) => (
          <div className="sales-sale-item" key={sale.id}>
            {sale.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesList;
