import { InferActionsType } from "../types";

export type ChatReducerPayloadType = InferActionsType<typeof ChatActionCreators>;

export const ChatActionCreators = {
  sendMessage: (data: any) => ({
    type: "SOCIAL_NETWORK/CHAT/SEND_MESSAGE",
    data
  } as const),
};

export const initialState = {
  messages: [],
};

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

// export const initializeAppThunk =
//   (): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
//   async (dispatch) => {
//     dispatch(authUserThunk());
//     dispatch(AppActionCreators.initializeApp());
//   };
