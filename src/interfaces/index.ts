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
}

export interface DialogsData {
  dialogs: Dialog[];
  messages: Message[];
  newMessage: string;
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
}

export interface ProfileData {
  posts: Post[];
  newPost: string;
  profileData: ProfileUserData;
}

export interface DialogsPageData {
  dialogsPage: DialogsData;
  sendMessage: () => void;
  updateMessageText: (text: string) => void;
}

export interface ProfileComponentData extends ProfileData {
  sendPost: () => void;
  updatePostText: (text: string) => void;
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
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  handlePage(page: number): void;
  setUserFollowed: (id: number, isFetchind: boolean) => void;
}

export interface UsersAPIData extends UsersData {
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  setUsers: (users: UserData[]) => void;
  setTotalUsersCount: (count: number) => void;
  setCurrentPage: (page: number) => void;
  setFetchingData: (isFetchind: boolean) => void;
  setUserFollowed: (id: number, isFetchind: boolean) => void;
}

export interface ProfileRouteData extends ProfileData {
  updatePostText: (text: string) => void;
  setProfileData: (data: ProfileUserData) => void;
  sendPost: () => void;
}
export interface ProfileAPIData extends ProfileRouteData {
  userId: string;
}

export interface UserAuthData {
  id: number | null;
  email: string;
  login: string;
}

export interface AuthData extends UserAuthData {
  isAuth: boolean;
}

export interface HeaderContainerData extends AuthData {
  authUser: (data: UserAuthData) => void;
}
