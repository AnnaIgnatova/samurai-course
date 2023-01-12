import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateData } from "./interfaces";

export const renderDOM = (
  root: ReactDOM.Root,
  state: StateData,
  sendMessage: (text: string) => void,
  createPost: (text: string) => void
) => {
  root.render(
    <React.StrictMode>
      <App state={state} sendMessage={sendMessage} createPost={createPost} />
    </React.StrictMode>
  );
};
