import React from "react";
import { Field, reduxForm } from "redux-form";
import { ProfileAPIData } from "../../../interfaces";
import { Post } from "./Post";
import styles from "./style.module.css";

export const Posts: React.FC<ProfileAPIData> = ({ posts, sendPost }) => {
  const sendPostData = (data: any) => {
    sendPost(data.post);
  };

  return (
    <div className={styles["posts-container"]}>
      <div className={styles["create-post"]}>
        <PostReduxForm onSubmit={sendPostData} />
      </div>
      <div>
        {posts.map(({ id, text, likes }) => (
          <Post key={id} message={text} likes={likes} />
        ))}
      </div>
    </div>
  );
};

const PostForm: React.FC<any> = ({ handleSubmit }) => {
  return (
    <div className={styles["posts-container"]}>
      <form onSubmit={handleSubmit} className={styles["create-post"]}>
        <Field type="text" component="textarea" name="post"/>
        <button>Add post</button>
      </form>
    </div>
  );
};

const PostReduxForm = reduxForm({ form: "post" })(PostForm);
