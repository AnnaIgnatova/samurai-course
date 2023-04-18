import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "..";
import { ChatAPI } from "../../api/chat";
import { InferActionsType } from "../types";

export type ChatReducerPayloadType = InferActionsType<
  typeof ChatActionCreators
>;

export const ChatActionCreators = {
  sendMessage: (data: any) =>
    ({
      type: "SOCIAL_NETWORK/CHAT/SEND_MESSAGE",
      data,
    } as const),
};

export const initialState = {
  messages: [],
};

// to do: messages received

export const chatReducer = (
  state = initialState,
  payload: ChatReducerPayloadType
) => {
  const { type } = payload;
  switch (type) {
    case "SOCIAL_NETWORK/CHAT/SEND_MESSAGE": {
      return {
        ...state,
        messages: [...state.messages, payload.data],
      };
    }
    default: {
      return { ...state };
    }
  }
};

let newMessageHandler: ((messages: MessageType[]) => void) | null = null;

const messagesHandleCreator = (dispatch: Dispatch) => {
  if (newMessageHandler === null)
    newMessageHandler = (messages) =>
      dispatch(ChatActionCreators.sendMessage(messages));
};

export const startMessagesListening =
  (): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    ChatAPI.start();
    ChatAPI.subscribe(messagesHandleCreator(dispatch));
  };

export const stopMessagesListening =
  (): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    ChatAPI.unsubscribe(messagesHandleCreator(dispatch));
    ChatAPI.stop();
  };

export const sendMessageThunkCreator =
  (
    message: string
  ): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    ChatAPI.sendMessage(message);
  };

type MessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
