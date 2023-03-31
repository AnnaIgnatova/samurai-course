import { AxiosResponse } from "axios";
import { Action } from "redux";
//import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { AppState } from "..";
import { AuthAPI } from "../../api";
import { LoginData, UserAuthData } from "../../interfaces";
import { InferActionsType } from "../types";

export const AuthActionCreators = {
  authUser: (data: UserAuthData) =>
    ({
      type: "SOCIAL_NETWORK/AUTH/SET_AUTH_DATA",
      data,
    } as const),
  loginUser: () =>
    ({
      type: "SOCIAL_NETWORK/AUTH/LOGIN_USER",
    } as const),
  logoutUser: () =>
    ({
      type: "SOCIAL_NETWORK/AUTH/LOGOUT_USER",
    } as const),
  getCaptcha: (data: string) =>
    ({
      type: "SOCIAL_NETWORK/AUTH/GET_CAPTCHA_URL",
      data,
    } as const),
};

export const initialState = {
  id: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false,
  captcha: null as null | string,
};

export type AuthReducerPayloadType = InferActionsType<
  typeof AuthActionCreators
>;

export const authReducer = (
  state = initialState,
  payload: AuthReducerPayloadType
) => {
  const { type } = payload;
  switch (type) {
    case "SOCIAL_NETWORK/AUTH/SET_AUTH_DATA": {
      return {
        ...state,
        ...payload.data,
      };
    }
    case "SOCIAL_NETWORK/AUTH/LOGIN_USER": {
      return {
        ...state,
        isAuth: true,
      };
    }
    case "SOCIAL_NETWORK/AUTH/LOGOUT_USER": {
      return {
        ...state,
        id: null,
        email: null,
        login: null,
        isAuth: false,
      };
    }
    case "SOCIAL_NETWORK/AUTH/GET_CAPTCHA_URL": {
      return {
        ...state,
        captcha: payload.data,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const authUserThunk =
  (): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    const data = await AuthAPI.authProfile();
    if (!data.resultCode)
      dispatch(AuthActionCreators.authUser({ ...data.data, isAuth: true }));
  };

export const loginUserThunk =
  (
    data: LoginData
  ): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    const { email, password, rememberMe, captcha } = data;
    const { resultCode, messages } = await AuthAPI.loginUser(
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
      } 
      // else
      //   dispatch(
      //     stopSubmit("login", {
      //       _error: messages ? messages[0] : "Some error",
      //     })
      //   );
    }
  };

export interface LogoutResponseType extends AxiosResponse {
  resultCode?: number;
}

export const logoutUserThunk =
  (): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    const res = await AuthAPI.logoutUser();
    if (!res?.resultCode) dispatch(AuthActionCreators.logoutUser());
  };

export const getCaptchaThunk =
  (): ThunkAction<Promise<void>, AppState, unknown, Action<string>> =>
  async (dispatch) => {
    const { url } = await AuthAPI.getCaptchaImage();
    dispatch(AuthActionCreators.getCaptcha(url));
  };
