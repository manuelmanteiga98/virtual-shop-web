import React from "react";
import { Link } from "react-router-dom";
import DeleteItemModal from "./DeleteItemModal";

function Listitem(props) {
  const { id, name, units, imageURL } = props;

  return (
    <div class="card">
      <img
        src={
          imageURL ||
          "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png"
        }
        class="card-img-top"
        alt="Item"
      />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{`Units = ${units}`}</p>
        <div className="container d-flex items-btns">
          <Link to={`/items/${id}`}>
            <a class="btn btn-primary">Show</a>
          </Link>
          <DeleteItemModal id={id} name={`${name}`} />
        </div>
      </div>
    </div>
  );
}

export default Listitem;
