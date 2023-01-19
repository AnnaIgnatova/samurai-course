import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { dialogsReducer } from "./reducers/DialogsReducer";
import { profileReducer } from "./reducers/ProfileReducer";
import { navbarReducer } from "./reducers/NavbarReducer";

export const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  navbar: navbarReducer,
});

export const store = configureStore({ reducer: rootReducer });
