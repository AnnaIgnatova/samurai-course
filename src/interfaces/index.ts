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

export interface AppData {
  dialogs: Dialog[];
  messages: Message[];
  posts: Post[];
}

export interface DialogsData {
  dialogs: Dialog[];
  messages: Message[];
}

export interface PostsData {
  posts: Post[];
}
