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
  sendMessage: () => void;
  createPost: () => void;
  updateMessageText: (text: string) => void;
  updatePostText: (text: string) => void;
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
  createPost: () => void;
  updatePostText: (text: string) => void;
}

export interface DialogsPageData {
  state: DialogsData;
  sendMessage: () => void;
  updateMessageText: (text: string) => void;
}

export interface PostsComponentData extends PostsData {
  createPost: () => void;
  updatePostText: (text: string) => void;
}

export interface NavbarData {
  state: Navbar;
}
