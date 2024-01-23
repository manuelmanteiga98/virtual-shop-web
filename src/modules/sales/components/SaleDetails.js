import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrentSale } from "../selectors";
import { getSaleItems } from "../../backend/salesBackend";
import { addItemToSale, initialize } from "../../../store/salesSlice";
import { SaleItem } from "./SaleItem";

const SaleDetails = () => {
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
    <div className="d-flex">
      {currentSale.map((item) => {
        return <SaleItem id={item.id} image={item.image} />;
      })}
    </div>
  );
};

export default SaleDetails;
