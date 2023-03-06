import React from "react";
import { Field, reduxForm } from "redux-form";
import { ProfileAPIData } from "../../../interfaces";
import { maxLength, required } from "../../../utils/validators";
import { FormTextarea } from "../../UI/Form/Field";
import { Post } from "./Post";
import styles from "./style.module.css";

const maxLength100 = maxLength(100);

export const Posts: React.FC<ProfileAPIData> = React.memo(
  ({ posts, sendPost, profileData }) => {
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
            <Post key={id} message={text} likes={likes} profileData={profileData}/>
          ))}
        </div>
      </div>
    );
  }
);

const PostForm: React.FC<any> = ({ handleSubmit }) => {
  return (
    <div className={styles["posts-container"]}>
      <form onSubmit={handleSubmit} className={styles["create-post"]}>
        <Field
          type="text"
          component={FormTextarea}
          name="post"
          placeholder="type post text"
          validate={[required, maxLength100]}
        />
        <button>Add post</button>
      </form>
    </div>
  );
};

const PostReduxForm = reduxForm({ form: "post" })(PostForm);
