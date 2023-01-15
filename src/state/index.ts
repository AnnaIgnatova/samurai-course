import { StateData } from "../interfaces";

export const store = {
  _rerender(state: StateData) {},
  _state: {
    profilePage: {
      posts: [
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
      ],
      newPost: "",
    },
    dialogsPage: {
      dialogs: [
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
      ],
      messages: [
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
      ],
      newMessage: "",
    },
    navbar: {
      friendsIds: [1, 2, 3, 4, 5, 6],
    },
  },
  getState() {
    return this._state;
  },
  _updateDOM() {
    this._rerender(this._state);
  },
  createPost() {
    const post = {
      id:
        this._state.profilePage.posts[this._state.profilePage.posts.length - 1]
          .id + 1,
      text: this._state.profilePage.newPost,
      likes: Math.floor(Math.random() * 10),
    };
    this._state.profilePage.posts.push(post);
    this._state.profilePage.newPost = "";
    this._updateDOM();
  },
  updatePostText(text: string) {
    this._state.profilePage.newPost = text;
    this._updateDOM();
  },
  sendMessage() {
    const message = {
      id:
        this._state.dialogsPage.messages[
          this._state.dialogsPage.messages.length - 1
        ].id + 1,
      text: this._state.dialogsPage.newMessage,
      from: "me",
    };
    this._state.dialogsPage.messages.push(message);
    this._state.dialogsPage.newMessage = "";
    this._updateDOM();
  },
  updateMessageText(text: string) {
    this._state.dialogsPage.newMessage = text;
    this._updateDOM();
  },
  subscriber(observer: (state: StateData) => void) {
    this._rerender = observer;
  },
};
