import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
=======
import { Context } from "../src/navbar/context";
// import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
>>>>>>> 6633dcbeffe73c024f4bbffc292e1a38eb10db59
  </React.StrictMode>
);
