import { Action, DialogsData } from "../../interfaces";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export const sendMessage = () => ({ type: SEND_MESSAGE });

export const updateMessageText = (text: string) => ({
  type: UPDATE_MESSAGE_TEXT,
  data: text,
});

export const initialState = {
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
};

export const dialogsReducer = (
  state: DialogsData = initialState,
  { type, data }: Action
) => {
  switch (type) {
    case SEND_MESSAGE: {
      const message = {
        id: state.messages[state.messages.length - 1].id + 1,
        text: state.newMessage,
        from: "me",
      };
      return {
        ...state,
        messages: [...state.messages, message],
        newMessage: "",
      };
    }
    case UPDATE_MESSAGE_TEXT: {
      return { ...state, newMessage: data };
    }
    default:
      return state;
  }
};
