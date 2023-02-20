import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { dialogsReducer } from "./reducers/DialogsReducer";
import { profileReducer } from "./reducers/ProfileReducer";
import { navbarReducer } from "./reducers/NavbarReducer";
import { authReducer } from "./reducers/AuthReducer";
import { usersReducer } from "./reducers/UsersReducer";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./reducers/AppReducer";

export const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  navbar: navbarReducer,
  header: authReducer,
  form: formReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
