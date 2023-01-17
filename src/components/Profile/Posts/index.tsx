import React from "react";
import { PostsComponentData } from "../../../interfaces";
import {
  createPostActionCreator,
  updatePostTextActionCreator,
} from "../../../state";
import { Post } from "./Post";
import styles from "./style.module.css";

export const Posts: React.FC<PostsComponentData> = ({
  posts,
  newPost,
  dispatch,
}) => {
  const sendPost = () => {
    dispatch(createPostActionCreator());
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    dispatch(updatePostTextActionCreator(text));
  };

  return (
    <div className={styles["posts-container"]}>
      <div className={styles["create-post"]}>
        <textarea
          placeholder="type something"
          onChange={handleChange}
          value={newPost}
        />
        <button onClick={sendPost}>Add post</button>
      </div>
      <div>
        {posts.map(({ text, likes }) => (
          <Post message={text} likes={likes} />
        ))}
      </div>
    </div>
  );
};
