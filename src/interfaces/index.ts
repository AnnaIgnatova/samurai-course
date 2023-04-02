import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../redux";
import { ProfileReducerPayloadType } from "../redux/reducers/ProfileReducer";
import { UsersReducerPayloadType } from "../redux/reducers/UsersReducer";

export interface Dialog {
  id: number;
  name: string;
}

export interface Message {
  id: number;
  text: string;
  from: string;
}

export interface PostData {
  id: number;
  likes: number;
  shares: number;
  comments: number;
  pinned: boolean;
  postDate: string;
}

export interface Post {
  id: number;
  likes: number;
  shares: number;
  comments: number;
  pinned: boolean;
  postDate: string;
  message: string;
  profileData: ProfileUserData;
  removeLike: (id: number) => void;
  likePost: (id: number) => void;
  pinPost: (id: number) => void;
}

export interface NavbarData {
  friendsIds: number[];
}

export interface StateData {
  profilePage: ProfileData;
  dialogsPage: DialogsData;
  usersPage: UsersData;
  navbar: NavbarData;
  header: AuthData;
  app: AppData;
}

export interface DialogsData {
  dialogs: Dialog[];
  messages: Message[];
}

export interface ProfileUserData {
  userId: string;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contacts: {
    github: string | null;
    vk: string | null;
    instagram: string | null;
    youtube: string | null;
  };
  photos: {
    small: string | null;
    large: string | null;
  };
  aboutMe: string | null;
}

export interface ProfileData {
  posts: Post[];
  profileData: ProfileUserData;
  status: string | null;
}

export interface DialogsPageData {
  dialogsPage: DialogsData;
  isAuth: boolean;
  sendMessage: (text: string) => void;
}

export interface ProfileComponentData extends ProfileData {
  sendPost: (text: string) => void;
  userId: string;
  ownProfile: boolean;
  getUserDataThunk: (
    userId: string
  ) => (dispatch: Dispatch<ProfileReducerPayloadType>) => void;
  getStatusDataThunk: (
    userId: string
  ) => (dispatch: Dispatch<ProfileReducerPayloadType>) => void;
}

export interface StoreData {
  _rerender: (state: StateData) => void;
  _state: StateData;
  getState: () => StateData;
  subscriber: (observer: (state: StateData) => void) => void;
}

export interface UserData {
  name: string;
  id: number;
  uniqueUrlName: null | string;
  photos: {
    small: null | string;
    large: null | string;
  };
  status: null | string;
  followed: boolean;
}

export interface UsersData {
  users: UserData[];
  totalCount: number;
  pageCount: number;
  currentPage: number;
  isFetchingData: boolean;
  isUsersFollow: number[];
  filterTerm: string;
  filterByFriend: null | boolean;
}

export interface UsersAPIContainerType {
  getUsersThunk: (
    page?: number
  ) => (dispatch: Dispatch<UsersReducerPayloadType>) => void;
  followUserThunk: (
    id: number
  ) => (dispatch: Dispatch<UsersReducerPayloadType>) => void;
  unfollowUserThunk: (
    id: number
  ) => (dispatch: Dispatch<UsersReducerPayloadType>) => void;
  isAuth: boolean;
  users: UserData[];
  totalCount: number;
  pageCount: number;
  currentPage: number;
  isFetchingData: boolean;
  isUsersFollow: number[];
  filterTerm: string;
  filterByFriend: null | boolean;
}

export interface UsersPageData extends UsersAPIContainerType {
  handlePage(page: number): void;
}

export interface ProfileRouteData extends ProfileData {
  sendPost: (text: string) => void;
  getUserDataThunk: (
    userId: string
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
  getStatusDataThunk: (
    userId: string
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
  updateStatusDataThunk: (
    text: string
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
  saveProfilePhotoThunk: (
    file: File
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
  saveProfileInfoThunk: (
    info: ProfileUserData
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
  isAuth: boolean;
}
export interface ProfileAPIData extends ProfileRouteData {
  userId: string;
  ownProfile?: boolean;
  toggleEditMode: () => void;
  removeLike: (id: number) => void;
  likePost: (id: number) => void;
  pinPost: (id: number) => void;
}

export interface UserAuthData {
  id: number | null;
  email: string;
  login: string;
}

export interface AuthData extends UserAuthData {
  isAuth: boolean;
  captcha: null | string;
}

export interface HeaderContainerData extends AuthData {
  logoutUserThunk: () => ThunkAction<
    Promise<void>,
    AppState,
    unknown,
    Action<string>
  >;
}

export interface AppData {
  isInitialized: boolean;
}

export interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
}
