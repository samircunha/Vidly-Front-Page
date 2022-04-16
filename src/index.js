import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Logged } from "./context/Logged";

ReactDOM.render(
  <React.StrictMode>
    <Logged>
      <App />
    </Logged>
  </React.StrictMode>,
  document.getElementById("root")
);
