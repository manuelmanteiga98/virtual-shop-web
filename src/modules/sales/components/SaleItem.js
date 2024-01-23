import React from "react";

const SaleItem = (props) => {
  const { id, image } = props;
  return (
    <div className="card sales-sale-item">
      <img
        className="card-img-top"
        src={
          image ||
          "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png"
        }
      />
      <div>
        <div className="d-flex align-items-center">
          <h2>Item's id: </h2>
          <div className="item-details-field">{id} </div>
        </div>
      </div>
    </div>
  );
};

export { SaleItem };
