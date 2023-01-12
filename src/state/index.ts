import ReactDOM from "react-dom/client";
import { StateData } from "../interfaces";
import { renderDOM } from "../render";

export const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

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
    from: "me",
  },
  {
    id: 2,
    text: "Good morning",
    from: "them",
  },
  {
    id: 3,
    text: "How are you",
    from: "me",
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

export const state: StateData = {
  profile: {
    posts: postsData,
  },
  dialogs: {
    dialogs: dialogsData,
    messages: messagesData,
  },
  navbar: {
    friendsIds: [1, 2, 3, 4, 5, 6],
  },
};

export const createPost = (text: string) => {
  const post = {
    id: postsData[postsData.length - 1].id + 1,
    text,
    likes: Math.floor(Math.random() * 10),
  };
  state.profile.posts.push(post);
  renderDOM(root, state, sendMessage, createPost);
};

export const sendMessage = (text: string) => {
  const message = {
    id: messagesData[messagesData.length - 1].id + 1,
    text,
    from: "me",
  };
  state.dialogs.messages.push(message);
  renderDOM(root, state, sendMessage, createPost);
};
