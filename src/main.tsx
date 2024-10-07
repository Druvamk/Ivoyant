import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
