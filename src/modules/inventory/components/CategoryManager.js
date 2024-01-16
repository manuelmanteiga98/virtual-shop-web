import React from "react";
import { useSelector } from "react-redux";
import { getCategories } from "../selectors";
import DeleteCategoryModal from "./DeleteCategoryModal";
import AddCategoryModal from "./AddCategoryModal";

const CategoryManager = () => {
  var categories = useSelector(getCategories);
  categories = categories.filter((category) => category !== "-");
  return (
    <div className="d-flex align-items-center justify-content-center vw-100">
      <AddCategoryModal />
      <div className="cm-categories">
        {categories.map((category) => {
          return (
            <div className="d-flex">
              <DeleteCategoryModal
                id={categories.indexOf(category)}
                category={category}
              />
              <h1 className="cm-category-name">{category}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryManager;
