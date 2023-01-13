import "./index.css";
import {
  createPost,
  root,
  sendMessage,
  state,
  updateMessageText,
  updatePostText,
} from "./state";
import { renderDOM } from "./render";

renderDOM(
  root,
  state,
  sendMessage,
  createPost,
  updateMessageText,
  updatePostText
);
