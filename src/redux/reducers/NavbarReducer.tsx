import { Action, Navbar } from "../../interfaces";

export const initialState = {
  friendsIds: [1, 2, 3, 4, 5, 6],
};

export const navbarReducer = (state: Navbar = initialState, action: Action) => {
  return state;
};
