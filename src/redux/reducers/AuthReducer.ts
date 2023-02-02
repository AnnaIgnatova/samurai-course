import { Action, AuthData, UserAuthData } from "../../interfaces";

const SET_AUTH_DATA = "SET_AUTH_DATA";

export const authUser = (data: UserAuthData) => ({
  type: SET_AUTH_DATA,
  data,
});

export const initialState = {
  id: null,
  email: "",
  login: "",
  isAuth: false,
};

export const authReducer = (
  state: AuthData = initialState,
  { type, data }: Action
) => {
  switch (type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        ...data,
      };
    }
    default: {
      return { ...state };
    }
  }
};
