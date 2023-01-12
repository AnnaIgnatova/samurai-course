import "./index.css";
import { createPost, root, sendMessage, state } from "./state";
import { renderDOM } from "./render";

renderDOM(root, state, sendMessage, createPost);
