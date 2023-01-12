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
  sendMessage: (text: string) => void;
  createPost: (text: string) => void;
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
  createPost: (text: string) => void;
}

export interface DialogsPageData {
  state: DialogsData;
  sendMessage: (text: string) => void;
}

export interface PostsComponentData extends PostsData {
  createPost: (text: string) => void;
}

export interface NavbarData {
  state: Navbar;
}
