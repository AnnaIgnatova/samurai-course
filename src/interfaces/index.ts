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
  profile: PostsData;
  dialogs: DialogsData;
  navbar: Navbar;
}

export interface AppData {
  state: StateData;
}

export interface DialogsData {
  dialogs: Dialog[];
  messages: Message[];
}

export interface PostsData {
  posts: Post[];
}

export interface ProfilePageData {
  state: PostsData;
}

export interface DialogsPageData {
  state: DialogsData;
}

export interface NavbarData {
    state: Navbar;
}