import React from "react";
import { Posts } from "../../components/Profile/Posts";
import {
  createPostActionCreator,
  updatePostTextActionCreator,
} from "../../redux/reducers/ProfileReducer";

export const PostsContainer: React.FC<any> = ({ store }) => {
  const { dispatch } = store;
  const state = store.getState().profilePage;

  const sendPost = () => {
    dispatch(createPostActionCreator());
  };

  const handleChange = (text: string) => {
    dispatch(updatePostTextActionCreator(text));
  };

  return (
    <Posts
      posts={state.posts}
      newPost={state.newPost}
      sendPost={sendPost}
      handleChange={handleChange}
    />
  );
};
