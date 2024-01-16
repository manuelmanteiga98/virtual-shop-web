import React from "react";
import { deleteCategory as deleteCategoryBackend } from "../../backend/itemsBackend";
import { deleteCategory } from "../../../store/itemsSlice";
import { useDispatch } from "react-redux";

const DeleteCategoryModal = (props) => {
  const { id, category } = props;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    deleteCategoryBackend(
      category,
      (categoryName) => dispatch(deleteCategory(categoryName)),
      (categoryName) =>
        alert("There was an error getting the category " + categoryName)
    );
  };

  const deleteCategoryModalBody = (
    <div className="d-flex justify-content-center mw-100">
      Are you sure that you want to delete this category?
    </div>
  );

  return (
    <div>
      <div
        className="cm-category-remove"
        data-bs-toggle="modal"
        data-bs-target={`#deleteModal${id}`}
      >
        X
      </div>
      <div
        class="modal fade"
        id={`deleteModal${id}`}
        tabindex="-1"
        aria-labelledby={`deleteModal${id}`}
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {category} will be deleted
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {deleteCategoryModalBody}
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Delete Category
              </button>
              <button
                type="button"
                class="btn btn-primary"
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

export default DeleteCategoryModal;
