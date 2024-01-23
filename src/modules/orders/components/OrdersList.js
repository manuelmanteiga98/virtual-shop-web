import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../selectors";
import { addOrder } from "../../../store/ordersSlice";
import { getOrdersFromFirestore } from "../../backend/ordersBackend";

const OrdersList = () => {
  const dispatch = useDispatch();
  const ordersList = useSelector(getOrders);

  if (!ordersList.length) {
    getOrdersFromFirestore((order) => dispatch(addOrder(order)));
    return (
      <div className="d-flex fs-1 h-100 justify-content-center align-items-center">
        No orders yet
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center align-items-center mw-100 vh-100">
      <div>
        {ordersList.map((order) => (
          <div className="orders-order-item" key={order.id}>
            {order.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
