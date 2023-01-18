import { Action, PostsData } from "../../interfaces";

const CREATE_POST = "CREATE-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

export const createPostActionCreator = () => ({ type: CREATE_POST });

export const updatePostTextActionCreator = (text: string) => ({
  type: UPDATE_POST_TEXT,
  data: text,
});

export const profileReducer = ({ type, data }: Action, state: PostsData) => {
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
