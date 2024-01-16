import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../../users";
import { Register } from "../../users";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLogged } from "../selectors";
import { InventoryList, ItemDetails } from "../../inventory";
import { SalesList } from "../../sales";
import { OrdersList } from "../orders";
import CategoryManager from "../../inventory/components/CategoryManager";

const Body = () => {
  const logged = useSelector(isLogged);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {logged && <Route path="/items" element={<InventoryList />} />}
      {logged && <Route path="/sales" element={<SalesList />} />}
      {logged && <Route path="/orders" element={<OrdersList />} />}
      {logged && <Route path="/items/:itemID" element={<ItemDetails />} />}
      {logged && (
        <Route path="/items/categories" element={<CategoryManager />} />
      )}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Body;
