import { AppData } from '../../interfaces';
import {
  AppReducerActionsType,
  initializeAppActionCreatorType,
} from '../types';
import { authUserThunk } from './AuthReducer';

export const INITIALIZE_APP = 'INITIALIZE_APP';

export const initializeApp: initializeAppActionCreatorType = () => ({
  type: INITIALIZE_APP,
});

export const initialState = {
  isInitialized: false,
};

export const appReducer = (
  state: AppData = initialState,
  payload: AppReducerActionsType
) => {
  const { type } = payload;
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

export const initializeAppThunk = () => async (dispatch: any) => {
  await dispatch(authUserThunk());
  dispatch(initializeApp());
};
