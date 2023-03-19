import { ProfileUserData, UserAuthData, UserData } from "../../interfaces";
import { INITIALIZE_APP } from "../reducers/AppReducer";
import {
  GET_CAPTCHA_URL,
  LOGIN_USER,
  LOGOUT_USER,
  SET_AUTH_DATA,
} from "../reducers/AuthReducer";
import { SEND_MESSAGE } from "../reducers/DialogsReducer";
import {
  CREATE_POST,
  DELETE_POST,
  GET_STATUS,
  LIKE_POST,
  PINNED_POST,
  REMOVE_LIKE,
  SAVE_PROFILE_PHOTO,
  SET_PROFILE_DATA,
  UPDATE_STATUS,
} from "../reducers/ProfileReducer";
import {
  FOLLOW,
  SET_CURRENT_PAGE,
  SET_FETCHING_USERS,
  SET_TOTAL_USERS_COUNT,
  SET_USERS,
  SET_USER_FOLLOWED,
  UNFOLLOW,
} from "../reducers/UsersReducer";

/* types for app reducer */

export type initializeAppActionType = { type: typeof INITIALIZE_APP };

export type initializeAppActionCreatorType = () => initializeAppActionType;

export type AppReducerActionsType = initializeAppActionType;

/* types for auth reducer */

export type AuthUserActionType = {
  type: typeof SET_AUTH_DATA;
  data: UserAuthData;
};

export type AuthUserActionCreatorType = (
  data: UserAuthData
) => AuthUserActionType;

export type LoginUserActionType = { type: typeof LOGIN_USER };

export type LoginUserActionCreatorType = () => LoginUserActionType;

export type LogoutUserActionType = { type: typeof LOGOUT_USER };

export type LogoutUserActionCreatorType = () => LogoutUserActionType;

export type GetCaptchaActionType = {
  type: typeof GET_CAPTCHA_URL;
  data: string;
};

export type GetCaptchaActionCreatorType = (
  data: string
) => GetCaptchaActionType;

export type AuthReducerActionsType =
  | AuthUserActionType
  | LoginUserActionType
  | LogoutUserActionType
  | GetCaptchaActionType;

/* types for dialogs  reducer */

export type SendMessageActionType = { type: typeof SEND_MESSAGE; data: string };
export type SendMessageActionCreatorType = (
  data: string
) => SendMessageActionType;

export type DialogsReducerActionsType = SendMessageActionType;

/* types for profile reducer */

export type SendPostActionType = { type: typeof CREATE_POST; data: string };

export type SendPostActionCreatorType = (data: string) => SendPostActionType;

export type SetProfileDataActionType = {
  type: typeof SET_PROFILE_DATA;
  data: ProfileUserData;
};

export type SetProfileDataActionCreatorType = (
  data: ProfileUserData
) => SetProfileDataActionType;

export type GetStatusActionType = {
  type: typeof GET_STATUS;
  data: string;
};

export type GetStatusActionCreatorType = (data: string) => GetStatusActionType;

export type UpdateStatusActionType = {
  type: typeof UPDATE_STATUS;
  data: string;
};

export type UpdateStatusActionCreatorType = (
  data: string
) => UpdateStatusActionType;

export type DeletePostActionType = { type: typeof DELETE_POST; data: number };

export type DeletePostActionCreatorType = (id: number) => DeletePostActionType;

export type SavePhotoActionType = {
  type: typeof SAVE_PROFILE_PHOTO;
  data: File;
};

export type SavePhotoActionCreatorType = (file: File) => SavePhotoActionType;

export type LikePostActionType = { type: typeof LIKE_POST; data: number };

export type LikePostActionCreatorType = (id: number) => LikePostActionType;

export type RemoveLikeActionType = { type: typeof REMOVE_LIKE; data: number };

export type RemoveLikeActionCreatorType = (id: number) => RemoveLikeActionType;

export type PinPostActionType = { type: typeof PINNED_POST; data: number };

export type PinPostActionCreatorType = (id: number) => PinPostActionType;

export type ProfileReducerActionsType =
  | SendPostActionType
  | SetProfileDataActionType
  | GetStatusActionType
  | UpdateStatusActionType
  | DeletePostActionType
  | SavePhotoActionType
  | LikePostActionType
  | RemoveLikeActionType
  | PinPostActionType;

/* types for users reducer */

export type FollowUserActionType = { type: typeof FOLLOW; data: number };

export type FollowUserActionCreatorType = (id: number) => FollowUserActionType;

export type UnfollowUserActionType = { type: typeof UNFOLLOW; data: number };

export type UnfollowUserActionCreatorType = (
  id: number
) => UnfollowUserActionType;

export type SetUsersActionType = {
  type: typeof SET_USERS;
  data: UserData[];
};

export type SetUsersActionCreatorType = (
  users: UserData[]
) => SetUsersActionType;

export type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  data?: number;
};

export type SetCurrentPageActionCreatorType = (
  page?: number
) => SetCurrentPageActionType;

export type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  data: number;
};

export type SetTotalUsersCountActionCreatorType = (
  count: number
) => SetTotalUsersCountActionType;

export type SetFetchingDataActionType = {
  type: typeof SET_FETCHING_USERS;
  data: boolean;
};

export type SetFetchingDataActionCreatorType = (
  isFetchind: boolean
) => SetFetchingDataActionType;

export type SetUserFollowedActionType = {
  type: typeof SET_USER_FOLLOWED;
  data: { id: number; isFetching: boolean };
};

export type SetUserFollowedActionCreatorType = (
  id: number,
  isFetching: boolean
) => SetUserFollowedActionType;

export type UsersReducerActionsType =
  | FollowUserActionType
  | UnfollowUserActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | SetFetchingDataActionType
  | SetUserFollowedActionType;
