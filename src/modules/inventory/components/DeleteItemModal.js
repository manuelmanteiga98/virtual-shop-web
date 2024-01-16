import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../store/itemsSlice";
import { deleteItem as deleteItemBackend } from "../../backend/itemsBackend";

const DeleteItemModal = (props) => {
  const dispatch = useDispatch();
  const { id, name } = props;

  const onDeleteButtonHandler = () => {
    dispatch(deleteItem(id));
    deleteItemBackend(
      id,
      () => {},
      () => {
        alert("Auth error. Please reload the page.");
      }
    );
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target={`#itemDeleteModal${id}`}
      >
        Delete
      </button>
      <div
        class="modal fade"
        id={`itemDeleteModal${id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Delete dialog
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Are you sure that you want to delete {name} from the database?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={onDeleteButtonHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
