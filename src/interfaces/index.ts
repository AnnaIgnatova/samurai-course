export interface Action {
  type: string;
  data?: any;
}

export interface Dialog {
  id: number;
  name: string;
}

export interface Message {
  text: string;
  from: string;
}

export interface Post {
  id: number;
  text: string;
  likes: number;
}

export interface Navbar {
  friendsIds: number[];
}

export interface StateData {
  profilePage: PostsData;
  dialogsPage: DialogsData;
  navbar: Navbar;
}

export interface AppData {
  state: StateData;
  dispatch: (action: Action) => void;
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

export interface ProfilePageData {
  state: PostsData;
  dispatch: (action: Action) => void;
}

export interface DialogsPageData {
  state: DialogsData;
  dispatch: (action: Action) => void;
}

export interface PostsComponentData extends PostsData {
  dispatch: (action: Action) => void;
}

export interface NavbarData {
  state: Navbar;
}

export interface StoreData {
  _rerender: (state: StateData) => void;
  _state: StateData;
  getState: () => StateData;
  dispatch: (action: Action) => void;
  subscriber: (observer: (state: StateData) => void) => void;
}
