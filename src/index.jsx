import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { ResponseProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ResponseProvider>
      <App />
    </ResponseProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
