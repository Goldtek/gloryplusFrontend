import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
