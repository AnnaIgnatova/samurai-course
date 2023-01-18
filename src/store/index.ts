import { Action, StateData } from "../interfaces";
import { dialogsReducer } from "./reducers/DialogsReducer";
import { profileReducer } from "./reducers/ProfileReducer";

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
  dispatch(action: Action) {
    this._state.profilePage = profileReducer(action, this._state.profilePage);
    this._state.dialogsPage = dialogsReducer(action, this._state.dialogsPage);

    this._updateDOM();
  },
  subscriber(observer: (state: StateData) => void) {
    this._rerender = observer;
  },
};
