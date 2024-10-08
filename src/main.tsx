import React from "react";
import ReactDOM from "react-dom/client";
import Validate from "./Form-validation/Validate";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Validate />
    </React.StrictMode>
  );
}
