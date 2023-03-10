export interface Action {
  type: string;
  data?: any;
}

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
  pinned: boolean;
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
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    instagram: string;
    youtube: string;
  };
  photos: {
    small: string;
    large: string;
  };
  aboutMe: string;
}

export interface ProfileData {
  posts: Post[];
  profileData: ProfileUserData;
  status: string;
}

export interface DialogsPageData {
  dialogsPage: DialogsData;
  isAuth: boolean;
  sendMessage: (text: string) => void;
}

export interface ProfileComponentData extends ProfileData {
  sendPost: (text: string) => void;
  getUserDataThunk: any;
}

export interface StoreData {
  _rerender: (state: StateData) => void;
  _state: StateData;
  getState: () => StateData;
  dispatch: (action: Action) => void;
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

export interface UsersPageData extends UsersData {
  followUserThunk: (id: number) => void;
  unfollowUserThunk: (id: number) => void;
  handlePage(page: number): void;
}

export interface UsersAPIData extends UsersData {
  getUsersThunk: any;
  followUserThunk: any;
  unfollowUserThunk: any;
  isAuth: boolean;
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
  toggleEditMode: any;
  removeLike: any;
  likePost: any;
  pinPost: any;
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
