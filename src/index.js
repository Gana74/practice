import React from "react";
import { createRoot } from "react-dom/client"; // Импортируем createRoot
import App from "./App";
import "./App.css";

// Используем createRoot вместо ReactDOM.render
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
