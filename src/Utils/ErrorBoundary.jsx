import React from "react";

function ErrorFallBack({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      style={{ padding: "20px", backgroundColor: "#fdd", borderRadius: "5px" }}
    >
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallBack;
