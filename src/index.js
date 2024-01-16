import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./modules/app";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import itemsReducer from "./store/itemsSlice";
import authReducer from "./store/authSlice";
import salesReducer from "./store/salesSlice";

var store = configureStore({
  reducer: {
    items: itemsReducer,
    auth: authReducer,
    sales: salesReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
