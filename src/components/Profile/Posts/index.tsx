import React from "react";
import { ProfileAPIData } from "../../../interfaces";
import { Post } from "./Post";
import styles from "./style.module.css";

export const Posts: React.FC<ProfileAPIData> = ({
  posts,
  newPost,
  sendPost,
  updatePostText,
}) => {
  const sendPostData = () => {
    sendPost();
  };

  const changePostText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    updatePostText(text);
  };

  return (
    <div className={styles["posts-container"]}>
      <div className={styles["create-post"]}>
        <textarea
          placeholder="Type something"
          onChange={changePostText}
          value={newPost}
        />
        <button onClick={sendPostData}>Add post</button>
      </div>
      <div>
        {posts.map(({ id, text, likes }) => (
          <Post key={id} message={text} likes={likes} />
        ))}
      </div>
    </div>
  );
};
