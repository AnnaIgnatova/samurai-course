import { Action, NavbarData } from "../../interfaces";

export const initialState = {
  friendsIds: [1, 2, 3, 4, 5, 6],
};

export const navbarReducer = (
  state: NavbarData = initialState,
  action: Action
) => {
  return { ...state };
};
