import { stopSubmit } from 'redux-form';
import { AuthAPI } from '../../api';
import { AuthData, LoginData, UserAuthData } from '../../interfaces';
import {
  AuthReducerActionsType,
  AuthUserActionCreatorType,
  GetCaptchaActionCreatorType,
  LoginUserActionCreatorType,
  LogoutUserActionCreatorType,
} from '../types';

export const SET_AUTH_DATA = 'SET_AUTH_DATA';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

export const authUser: AuthUserActionCreatorType = (data: UserAuthData) => ({
  type: SET_AUTH_DATA,
  data,
});

export const loginUserAC: LoginUserActionCreatorType = () => ({
  type: LOGIN_USER,
});

export const logoutUserAC: LogoutUserActionCreatorType = () => ({
  type: LOGOUT_USER,
});

export const getCaptchaAC: GetCaptchaActionCreatorType = (data: string) => ({
  type: GET_CAPTCHA_URL,
  data,
});

export const initialState = {
  id: null,
  email: '',
  login: '',
  isAuth: false,
  captcha: null,
};

export const authReducer = (
  state: AuthData = initialState,
  payload: AuthReducerActionsType
) => {
  const { type } = payload;
  switch (type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        ...payload.data,
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
        email: '',
        login: '',
        isAuth: false,
      };
    }
    case GET_CAPTCHA_URL: {
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

export const authUserThunk = () => async (dispatch: any) => {
  const data = await AuthAPI.authProfile();
  if (!data.resultCode) dispatch(authUser({ ...data.data, isAuth: true }));
};

export const loginUserThunk = (data: LoginData) => async (dispatch: any) => {
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
    } else
      dispatch(
        stopSubmit('login', {
          _error: messages ? messages[0] : 'Some error',
        })
      );
  }
};

export const logoutUserThunk = () => async (dispatch: any) => {
  const { resultCode }: any = await AuthAPI.logoutUser();
  if (!resultCode) dispatch(logoutUserAC());
};

export const getCaptchaThunk = () => async (dispatch: any) => {
  const { url } = await AuthAPI.getCaptchaImage();
  dispatch(getCaptchaAC(url));
};
