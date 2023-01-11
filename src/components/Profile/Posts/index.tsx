import React, { RefObject } from "react";
import { PostsData } from "../../../interfaces";
import { Post } from "./Post";
import styles from "./style.module.css";

export const Posts: React.FC<PostsData> = ({ posts }) => {
  const postField = React.useRef<HTMLTextAreaElement>(null);

  const createPost = () => {
    const text = postField.current && postField.current.value;
    console.log(text);
  };

  return (
    <div className={styles["posts-container"]}>
      <div className={styles["create-post"]}>
        <textarea placeholder="type something" ref={postField} ></textarea>
        <button onClick={createPost}>Add post</button>
      </div>
      <div>
        {posts.map(({ text, likes }) => (
          <Post message={text} likes={likes} />
        ))}
      </div>
    </div>
  );
};
