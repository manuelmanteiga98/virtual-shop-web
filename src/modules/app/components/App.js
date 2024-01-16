import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Body from "./Body";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
  );
};

export default App;
