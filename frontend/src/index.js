import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import {
  AnalyticsProvider
} from "./context/AnalyticsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(

  <AnalyticsProvider>

    <App />

  </AnalyticsProvider>

);