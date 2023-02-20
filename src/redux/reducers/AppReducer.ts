import { Action, AppData } from "../../interfaces";
import { authUserThunk } from "./AuthReducer";

const INITIALIZE_APP = "INITIALIZE_APP";

export const initializeApp = () => ({
  type: INITIALIZE_APP,
});

export const initialState = {
  isInitialized: false,
};

export const appReducer = (
  state: AppData = initialState,
  { type, data }: Action
) => {
  switch (type) {
    case INITIALIZE_APP: {
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

export const initializeAppThunk = () => (dispatch: any) => {
  const promise = dispatch(authUserThunk());
  Promise.all([promise]).then(() => {
    dispatch(initializeApp());
  });
};
