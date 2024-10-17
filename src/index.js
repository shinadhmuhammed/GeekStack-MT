import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorFallBack from "./Utils/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => {}}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
