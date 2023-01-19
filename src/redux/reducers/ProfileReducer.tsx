import { Action, PostsData } from "../../interfaces";

const CREATE_POST = "CREATE-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

export const createPostActionCreator = () => ({ type: CREATE_POST });

export const updatePostTextActionCreator = (text: string) => ({
  type: UPDATE_POST_TEXT,
  data: text,
});

export const initialState = {
  posts: [
    {
      id: 1,
      text: "post 1",
      likes: 1,
    },
    {
      id: 2,
      text: "post 2",
      likes: 3,
    },
    {
      id: 3,
      text: "post 3",
      likes: 2,
    },
    {
      id: 4,
      text: "post 4",
      likes: 5,
    },
    {
      id: 5,
      text: "post 5",
      likes: 1,
    },
  ],
  newPost: "",
};

export const profileReducer = (
  state: PostsData = initialState,
  { type, data }: Action
) => {
  switch (type) {
    case CREATE_POST: {
      const post = {
        id: state.posts[state.posts.length - 1].id + 1,
        text: state.newPost,
        likes: Math.floor(Math.random() * 10),
      };
      state.posts.push(post);
      state.newPost = "";
      return state;
    }
    case UPDATE_POST_TEXT: {
      state.newPost = data;
      return state;
    }
    default:
      return state;
  }
};
