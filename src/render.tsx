import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateData } from "./interfaces";

export const renderDOM = (
  root: ReactDOM.Root,
  state: StateData,
  sendMessage: () => void,
  createPost: () => void,
  updateMessageText: (text: string) => void,
  updatePostText: (text: string) => void
) => {
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
