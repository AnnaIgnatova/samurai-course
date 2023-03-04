import { stopSubmit } from "redux-form";
import { authProfile, getCaptchaImage, loginUser, logoutUser } from "../../api";
import { Action, AuthData, UserAuthData } from "../../interfaces";

const SET_AUTH_DATA = "SET_AUTH_DATA";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL";

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

export const getCaptchaAC = (data: string) => ({
  type: GET_CAPTCHA_URL,
  data,
});

export const initialState = {
  id: null,
  email: "",
  login: "",
  isAuth: false,
  captcha: null,
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
    case GET_CAPTCHA_URL: {
      return {
        ...state,
        captcha: data,
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
  const { email, password, rememberMe, captcha } = data;
  const { resultCode, messages } = await loginUser(
    email,
    password,
    rememberMe,
    captcha
  );
  if (!resultCode) {
    dispatch(authUserThunk());
  } else {
    if (resultCode === 10) {
      dispatch(getCaptchaThunk());
    } else
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

export const getCaptchaThunk = () => async (dispatch: any) => {
  const { url } = await getCaptchaImage();
  dispatch(getCaptchaAC(url));
};
