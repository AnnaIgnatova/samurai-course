import { InferActionsType } from "../types";

export const DialogsActionCreators = {
  sendMessage: (data: string) =>
    ({
      type: "SOCIAL_NETWORK/DIALOGS/SEND-MESSAGE",
      data,
    } as const),
};

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
};

export type DialogsReducerPayloadType = InferActionsType<
  typeof DialogsActionCreators
>;

export const dialogsReducer = (
  state = initialState,
  { type, data }: DialogsReducerPayloadType
) => {
  switch (type) {
    case "SOCIAL_NETWORK/DIALOGS/SEND-MESSAGE": {
      const message = {
        id: state.messages[state.messages.length - 1].id + 1,
        text: data,
        from: "me",
      };
      return {
        ...state,
        messages: [...state.messages, message],
        newMessage: "",
      };
    }
    default:
      return state;
  }
};
