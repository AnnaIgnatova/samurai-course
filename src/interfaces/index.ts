export interface Dialog {
  id: number;
  name: string;
}

export interface Message {
  id: number;
  text: string;
  from: string;
}

export interface Post {
  id: number;
  text: string;
  likes: number;
  shares: number;
  comments: number;
  pinned: boolean;
  postDate: string;
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
  getUserDataThunk: any;
  getStatusDataThunk: any;
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
  uniqueUrlName: string;
  photos: {
    small: string;
    large: string;
  };
  status: string;
  followed: boolean;
}

export interface UsersData {
  users: UserData[];
  totalCount: number;
  pageCount: number;
  currentPage: number;
  isFetchingData: boolean;
  isUsersFollow: number[];
}

export interface UsersAPIContainerType {
  getUsersThunk: any;
  followUserThunk: any;
  unfollowUserThunk: any;
  isAuth: boolean;
  users: UserData[];
  totalCount: number;
  pageCount: number;
  currentPage: number;
  isFetchingData: boolean;
  isUsersFollow: number[];
}

export interface UsersPageData extends UsersAPIContainerType {
  handlePage(page: number): void;
}

export interface ProfileRouteData extends ProfileData {
  sendPost: (text: string) => void;
  getUserDataThunk: any;
  getStatusDataThunk: any;
  updateStatusDataThunk: any;
  saveProfilePhotoThunk: any;
  saveProfileInfoThunk: any;
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
  logoutUserThunk: any;
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
