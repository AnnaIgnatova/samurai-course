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
  profilePage: PostsData;
  dialogsPage: DialogsData;
  usersPage: UsersData;
  navbar: NavbarData;
}

export interface DialogsData {
  dialogs: Dialog[];
  messages: Message[];
  newMessage: string;
}

export interface PostsData {
  posts: Post[];
  newPost: string;
}

export interface DialogsPageData {
  dialogsPage: DialogsData;
  sendMessage: () => void;
  updateMessageText: (text: string) => void;
}

export interface PostsComponentData extends PostsData {
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
}

export interface UsersPageData extends UsersData {
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  handlePage(page: number): void;
}

export interface UsersAPIData extends UsersData {
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  setUsers: (users: UserData[]) => void;
  setTotalUsersCount: (count: number) => void;
  setCurrentPage: (page: number) => void;
  setFetchingData: (isFetchind: boolean) => void;
}
