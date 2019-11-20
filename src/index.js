import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from '@sentry/browser';
import "./index.css";
// import App from './App';
import Home from "./components/home";
import * as serviceWorker from "./serviceWorker";

Sentry.init({dsn: "https://2c6dcda20e1a4119b6afc80e071be3bc@sentry.io/1822829"});
ReactDOM.render(
  <Home />,

  document.getElementById("root")
);

serviceWorker.unregister();
