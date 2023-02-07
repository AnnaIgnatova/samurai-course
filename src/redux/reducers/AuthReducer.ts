import { authProfile } from "../../api";
import { Action, AuthData, UserAuthData } from "../../interfaces";

const SET_AUTH_DATA = "SET_AUTH_DATA";

export const authUser = (data: UserAuthData) => ({
  type: SET_AUTH_DATA,
  data,
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
