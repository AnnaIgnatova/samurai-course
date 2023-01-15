import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./state";
import { StateData } from "./interfaces";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const renderDOM = (state: StateData) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        sendMessage={store.sendMessage.bind(store)}
        createPost={store.createPost.bind(store)}
        updateMessageText={store.updateMessageText.bind(store)}
        updatePostText={store.updatePostText.bind(store)}
      />
    </React.StrictMode>
  );
};

renderDOM(store.getState());

store.subscriber(renderDOM);
