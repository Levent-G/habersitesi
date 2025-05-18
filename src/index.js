import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import HaberProvider from "./context/haberContext";

ReactDOM.render(
  <React.StrictMode>
    <HaberProvider>
      <App />
    </HaberProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
