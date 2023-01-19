import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const renderDOM = (state: any) => {
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  );
};

renderDOM(store.getState());

store.subscribe(() => {
  const state = store.getState();
  renderDOM(state);
});
