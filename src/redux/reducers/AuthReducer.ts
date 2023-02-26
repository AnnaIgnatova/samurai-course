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
  const data = await authProfile();
  if (!data.resultCode) dispatch(authUser({ ...data.data, isAuth: true }));
};

export const loginUserThunk = (data: any) => async (dispatch: any) => {
  const { email, password, rememberMe } = data;
  const { resultCode, messages } = await loginUser(email, password, rememberMe);
  if (!resultCode) {
    dispatch(authUserThunk());
  } else {
    dispatch(
      stopSubmit("login", {
        _error: messages ? messages[0] : "Some error",
      })
    );
  }
};

export const logoutUserThunk = () => async (dispatch: any) => {
  const { resultCode }: any = await logoutUser();
  if (!resultCode) dispatch(logoutUserAC());
};
