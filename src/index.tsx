import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const dialogsData = [
  {
    id: 1,
    name: "Anna",
  },
  {
    id: 2,
    name: "Sasha",
  },
  {
    id: 3,
    name: "Olya",
  },
  {
    id: 4,
    name: "Misha",
  },
  {
    id: 5,
    name: "Dima",
  },
];

const messagesData = [
  {
    id: 1,
    text: "Hi",
  },
  {
    id: 2,
    text: "Good morning",
  },
  {
    id: 3,
    text: "How are you",
  },
];

const postsData = [
  {
    id: 1,
    text: "post 1",
    likes: 1,
  },
  {
    id: 2,
    text: "post 2",
    likes: 3,
  },
  {
    id: 3,
    text: "post 3",
    likes: 2,
  },
  {
    id: 4,
    text: "post 4",
    likes: 5,
  },
  {
    id: 5,
    text: "post 5",
    likes: 1,
  },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messagesData} posts={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
