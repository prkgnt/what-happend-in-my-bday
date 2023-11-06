import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalFont from "./assets/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalFont />
    <App />
  </React.StrictMode>
);
