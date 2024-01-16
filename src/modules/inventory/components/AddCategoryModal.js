import React, { useState } from "react";
import { addCategory as addCategoryBackend } from "../../backend/itemsBackend";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../store/itemsSlice";

const AddCategoryModal = () => {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const addCategoryModalBody = (
    <div>
      Category Name:
      <input
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
    </div>
  );

  const handleSubmit = () => {
    addCategoryBackend(
      categoryName,
      (categoryName) => dispatch(addCategory(categoryName)),
      () => alert("Some error just happened")
    );
  };

  return (
    <div>
      <button
        className="btn btn-primary position-absolute bottom-0 end-0 cm-add-category"
        data-bs-toggle="modal"
        data-bs-target={`#addCategoryModal`}
      >
        +
      </button>
      <div
        class="modal fade"
        id="addCategoryModal"
        tabindex="-1"
        aria-labelledby="addCategoryModal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Category
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {addCategoryModalBody}
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Add Category
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
