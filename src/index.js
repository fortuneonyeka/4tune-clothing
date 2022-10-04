import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/User.context";
import "./index.scss";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
