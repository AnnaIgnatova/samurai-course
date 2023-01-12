import React from "react";
import { PostsComponentData } from "../../../interfaces";
import { Post } from "./Post";
import styles from "./style.module.css";

export const Posts: React.FC<PostsComponentData> = ({ posts, createPost }) => {
  const postRef = React.useRef<HTMLTextAreaElement>(null);

  const sendPost = () => {
    if (postRef.current) {
      const text = postRef.current.value;
      postRef.current.value = "";
      createPost(text);
    }
  };

  return (
    <div className={styles["posts-container"]}>
      <div className={styles["create-post"]}>
        <textarea placeholder="type something" ref={postRef}></textarea>
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
