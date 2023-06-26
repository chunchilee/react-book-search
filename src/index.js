import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.scss";
import { BooksProvider } from "./context/Books";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BooksProvider>
    <App />
  </BooksProvider>
);
