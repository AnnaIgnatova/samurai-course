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
  createMessage: () => void;
  handleChange: (text: string) => void;
}

export interface PostsComponentData extends PostsData {
  sendPost: () => void;
  handleChange: (text: string) => void;
}

export interface StoreData {
  _rerender: (state: StateData) => void;
  _state: StateData;
  getState: () => StateData;
  dispatch: (action: Action) => void;
  subscriber: (observer: (state: StateData) => void) => void;
}

export interface UserData {
  id: number;
  name: string;
  isFollow: boolean;
  imgUrl: string;
  location: { city: string; country: string };
}

export interface UsersData {
  users: UserData[];
}

export interface UsersPageData {
  users: UserData[];
  followUser: (id: number) => void;
  unfollowUser: (id: number) => void;
  setUsersData: (users: UserData[]) => void;
}
