import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

// rendering components
import App from "./components/App";

const main = document.getElementById("app");

ReactDOM.render(<App />, main);
