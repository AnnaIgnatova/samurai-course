import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createPost,
  root,
  sendMessage,
  state,
  subscriber,
  updateMessageText,
  updatePostText,
} from "./state";
import { RenderDOMData } from "./interfaces";
import App from "./App";

const renderDOM = (data: RenderDOMData) => {
  const {
    root,
    state,
    sendMessage,
    createPost,
    updateMessageText,
    updatePostText,
  } = data;
  root.render(
    <React.StrictMode>
      <App
        state={state}
        sendMessage={sendMessage}
        createPost={createPost}
        updateMessageText={updateMessageText}
        updatePostText={updatePostText}
      />
    </React.StrictMode>
  );
};

renderDOM({
  root,
  state,
  sendMessage,
  createPost,
  updateMessageText,
  updatePostText,
});

subscriber(renderDOM);
