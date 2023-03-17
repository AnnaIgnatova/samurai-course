import { AppData } from '../../interfaces';
import { authUserThunk } from './AuthReducer';

const INITIALIZE_APP = 'INITIALIZE_APP';

export type initializeAppActionType = { type: typeof INITIALIZE_APP };
export type initializeAppActionCreatorType = () => {
  type: typeof INITIALIZE_APP;
};

export type AppReducerActionsType = initializeAppActionType;

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
