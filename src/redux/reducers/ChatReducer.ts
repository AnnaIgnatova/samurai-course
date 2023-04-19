import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "..";
import { ChatAPI } from "../../api/chat";
import { InferActionsType } from "../types";

export type ChatReducerPayloadType = InferActionsType<
  typeof ChatActionCreators
>;

export const ChatActionCreators = {
  receiveMessages: (data: any) =>
    ({
      type: "SOCIAL_NETWORK/CHAT/MESSAGES_RECEIVED",
      data,
    } as const),
  statusChanged: (data: "pending" | "ready") =>
    ({
      type: "SOCIAL_NETWORK/CHAT/STATUS_CHANGED",
      data,
    } as const),
};

export const initialState = {
  messages: [],
  status: "pending",
};

// to do: messages received

export const chatReducer = (
  state = initialState,
  payload: ChatReducerPayloadType
) => {
  const { type } = payload;
  switch (type) {
    case "SOCIAL_NETWORK/CHAT/MESSAGES_RECEIVED": {
      return {
        ...state,
        messages: [...state.messages, ...payload.data],
      };
    }
    case "SOCIAL_NETWORK/CHAT/STATUS_CHANGED": {
      return {
        ...state,
        status: payload.data,
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
      dispatch(ChatActionCreators.receiveMessages(messages));

  return newMessageHandler;
};

let _changeStatusHandler: ((status: "pending" | "ready") => void) | null = null;

const changeStatusHandler = (dispatch: Dispatch) => {
  if (_changeStatusHandler === null)
    _changeStatusHandler = (status) =>
      dispatch(ChatActionCreators.statusChanged(status));

  return _changeStatusHandler;
};

export const startMessagesListening =
  (): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    ChatAPI.start();
    ChatAPI.subscribe("messages-received", messagesHandleCreator(dispatch));
   // ChatAPI.subscribe("status-changed", changeStatusHandler(dispatch));
  };

export const stopMessagesListening =
  (): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    ChatAPI.unsubscribe("messages-received", messagesHandleCreator(dispatch));
    //ChatAPI.unsubscribe("status-changed", changeStatusHandler(dispatch));
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
