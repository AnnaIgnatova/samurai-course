import React from "react";
import { PostsComponentData } from "../../../interfaces";
import { Post } from "./Post";
import styles from "./style.module.css";

export const Posts: React.FC<PostsComponentData> = ({
  posts,
  newPost,
  dispatch,
}) => {
  const postRef = React.useRef<HTMLTextAreaElement>(null);

  const sendPost = () => {
    dispatch({ type: "CREATE-POST" });
  };

  const handleChange = () => {
    if (postRef.current) {
      const text = postRef.current.value;
      dispatch({ type: "UPDATE-POST-TEXT", data: text });
    }
  };

  return (
    <div className={styles["posts-container"]}>
      <div className={styles["create-post"]}>
        <textarea
          placeholder="type something"
          ref={postRef}
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
