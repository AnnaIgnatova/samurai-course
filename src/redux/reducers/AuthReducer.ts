import { stopSubmit } from "redux-form";
import { authProfile, getUserData, loginUser, logoutUser } from "../../api";
import { Action, AuthData, UserAuthData } from "../../interfaces";

const SET_AUTH_DATA = "SET_AUTH_DATA";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

export const authUser = (data: UserAuthData) => ({
  type: SET_AUTH_DATA,
  data,
});

export const loginUserAC = () => ({
  type: LOGIN_USER,
});

export const logoutUserAC = () => ({
  type: LOGOUT_USER,
});

export const initialState = {
  id: 27789,
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
    case LOGIN_USER: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isAuth: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const authUserThunk = () => (dispatch: any) => {
  authProfile().then((data) => {
    if (!data.resultCode) dispatch(authUser({ ...data.data, isAuth: true }));
  });
};

export const loginUserThunk = (data: any) => (dispatch: any) => {
  const { email, password, rememberMe } = data;
  loginUser(email, password, rememberMe).then((res) => {
    if (!res.data.resultCode) {
      dispatch(authUserThunk());
    } else dispatch(stopSubmit("login", res.data.messages));
  });
};

export const logoutUserThunk = () => (dispatch: any) => {
  logoutUser().then((res) => {
    if (!res.data.resultCode) dispatch(logoutUserAC());
  });
};
