import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "..";
import { InferActionsType } from "../types";
import { authUserThunk } from "./AuthReducer";

export type AppReducerPayloadType = InferActionsType<typeof AppActionCreators>;

export const AppActionCreators = {
  initializeApp: () => ({
    type: "SOCIAL_NETWORK/APP/INITIALIZE_APP",
  }),
};

export const initialState = {
  isInitialized: false,
};

export const appReducer = (
  state = initialState,
  payload: AppReducerPayloadType
) => {
  const { type } = payload;
  switch (type) {
    case "SOCIAL_NETWORK/APP/INITIALIZE_APP": {
      return {
        ...state,
        isInitialized: true,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const initializeAppThunk =
  (): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(authUserThunk());
    dispatch(AppActionCreators.initializeApp());
  };
