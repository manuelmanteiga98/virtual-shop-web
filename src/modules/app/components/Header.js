import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { isLogged, getCategories } from "../selectors";
import { toFiltered, toFilteredByCategory } from "../../../store/itemsSlice";
import styles from "../app.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const currentPath = useLocation().pathname;

  // States
  const [filteringText, setFilteringText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("-");

  // Selections
  const categories = useSelector(getCategories);
  const logged = useSelector(isLogged);

  // Handlers
  const onLogoutClick = () => dispatch(logout());
  const filterList = (e) => {
    setFilteringText(e.target.value);
    dispatch(toFiltered(e.target.value));
  };
  const onCategoryChangeHandler = (e) => {
    const category = e.target.value === "-" ? "" : e.target.value;
    setSelectedCategory(category);
    dispatch(
      toFilteredByCategory({
        category: category,
        text: filteringText,
      })
    );
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${styles.headerNavbar}`}
    >
      <div className="container mw-100">
        <a className="navbar-brand" href="/">
          Market App
        </a>

        {logged && currentPath === "/items" && (
          <div className={`input-group rounded ${styles.headerSearchItems}`}>
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={filteringText}
              onChange={filterList}
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        )}

        {logged && currentPath === "/items" && categories.length > 0 && (
          <select
            className={`form-select ${styles.headerCategorySelector}`}
            name="categories"
            id="categories"
            onChange={onCategoryChangeHandler}
            value={selectedCategory}
          >
            {categories.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        )}

        {logged && (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/items">
                  <a className="nav-link">Inventory</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sections
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link to="/sales">
                      <a className="nav-link">Sales</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/orders">
                      <a className="nav-link">Orders</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/" onClick={onLogoutClick}>
                  <img
                    className={`nav-link ${styles.headerLogout}`}
                    src="https://cdn.pixabay.com/photo/2014/03/25/16/59/external-link-297789_960_720.png"
                  />
                </Link>
              </li>
            </ul>
          </div>
        )}
        {logged && (
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
