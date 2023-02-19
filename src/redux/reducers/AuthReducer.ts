import { stopSubmit } from "redux-form";
import { authProfile, loginUser, logoutUser } from "../../api";
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
    case LOGIN_USER: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        id: null,
        email: "",
        login: "",
        isAuth: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const authUserThunk = () => async (dispatch: any) => {
  return authProfile().then((data) => {
    if (!data.resultCode) dispatch(authUser({ ...data.data, isAuth: true }));
  });
};

export const loginUserThunk = (data: any) => (dispatch: any) => {
  const { email, password, rememberMe } = data;
  loginUser(email, password, rememberMe).then((res) => {
    if (!res.resultCode) {
      dispatch(authUserThunk());
    } else {
      dispatch(
        stopSubmit("login", {
          _error: res.messages ? res.messages[0] : "Some error",
        })
      );
    }
  });
};

export const logoutUserThunk = () => (dispatch: any) => {
  console.log("logout");
  logoutUser().then((res: any) => {
    if (!res.resultCode) dispatch(logoutUserAC());
  });
};
