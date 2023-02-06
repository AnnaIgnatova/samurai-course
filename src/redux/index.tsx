import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { dialogsReducer } from "./reducers/DialogsReducer";
import { profileReducer } from "./reducers/ProfileReducer";
import { navbarReducer } from "./reducers/NavbarReducer";
import { authReducer } from "./reducers/AuthReducer";
import { usersReducer } from "./reducers/UsersReducer";

export const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  navbar: navbarReducer,
  header: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
