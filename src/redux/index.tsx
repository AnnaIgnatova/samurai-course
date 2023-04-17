import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { dialogsReducer } from "./reducers/DialogsReducer";
import { profileReducer } from "./reducers/ProfileReducer";
import { navbarReducer } from "./reducers/NavbarReducer";
import { authReducer } from "./reducers/AuthReducer";
import { usersReducer } from "./reducers/UsersReducer";
import { appReducer } from "./reducers/AppReducer";
import { chatReducer } from "./reducers/ChatReducer";

export const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  navbar: navbarReducer,
  header: authReducer,
  app: appReducer,
  chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
