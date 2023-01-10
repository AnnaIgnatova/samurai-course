export interface Dialog {
  id: number;
  name: string;
}

export interface Message {
  text: string;
}

export interface Post {
  id: number;
  text: string;
  likes: number;
}

export interface StateData {
  profile: PostsData;
  dialogs: DialogsData;
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
