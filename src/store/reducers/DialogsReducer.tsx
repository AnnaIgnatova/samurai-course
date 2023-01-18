import { Action, DialogsData } from "../../interfaces";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateMessageTextActionCreator = (text: string) => ({
  type: UPDATE_MESSAGE_TEXT,
  data: text,
});

export const dialogsReducer = ({ type, data }: Action, state: DialogsData) => {
  switch (type) {
    case SEND_MESSAGE: {
      const message = {
        id: state.messages[state.messages.length - 1].id + 1,
        text: state.newMessage,
        from: "me",
      };
      state.messages.push(message);
      state.newMessage = "";
      return state;
    }
    case UPDATE_MESSAGE_TEXT: {
      state.newMessage = data;
      return state;
    }
    default:
      return state;
  }
};
