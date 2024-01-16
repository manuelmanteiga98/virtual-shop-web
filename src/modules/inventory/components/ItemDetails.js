import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getList } from "../selectors";

const ItemDetails = () => {
  const { itemID } = useParams();
  const list = useSelector(getList);
  const item = list.find((item) => item.id === itemID);
  if (!item) return <div>Error</div>;
  return (
    <div className="item-details-all">
      <img
        className="item-details-photo"
        src={
          item.imageURL ||
          "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png"
        }
      />
      <div>
        <div className="item-details-main">
          <div className="d-flex align-items-center">
            <h2>Item's id: </h2>
            <div className="item-details-field">{item.id} </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>Item's name: </h2>
            <div className="item-details-field">{item.name} </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>Item's units: </h2>
            <div className="item-details-field">{item.units} </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>Item's category: </h2>
            <div className="item-details-field">{item.category} </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>Item's cost: </h2>
            <div className="item-details-field">{item.cost} </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>Item's price: </h2>
            <div className="item-details-field">{item.price} </div>
          </div>
          {item.units_limit && (
            <div className="d-flex align-items-center">
              <h2>Item's units_limit: </h2>
              <div className="item-details-field">{item.units_limit} </div>
            </div>
          )}
        </div>
        <Link to="/items">
          <button className="btn btn-success item-details-back">Back</button>
        </Link>
      </div>
    </div>
  );
};

export { ItemDetails };
