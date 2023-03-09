import React from "react";
import { Field, reduxForm } from "redux-form";
import { ProfileAPIData } from "../../../interfaces";
import { maxLength, required } from "../../../utils/validators";
import { FormTextarea } from "../../UI/Form/Field";
import { Post } from "./Post";
import styles from "./style.module.css";

const maxLength100 = maxLength(100);

export const Posts: React.FC<ProfileAPIData> = React.memo(
  ({ posts, sendPost, profileData, likePost, removeLike }) => {
    const sendPostData = (data: any) => {
      sendPost(data.post);
    };

    return (
      <div className={styles["posts-container"]}>
        <div className={styles["create-post"]}>
          <PostReduxForm onSubmit={sendPostData} profileData={profileData} />
        </div>
        <div>
          {posts.map(({ id, text, ...data }) => (
            <Post
              key={id}
              id={id}
              message={text}
              profileData={profileData}
              likePost={likePost}
              removeLike={removeLike}
              {...data}
            />
          ))}
        </div>
      </div>
    );
  }
);

const PostForm: React.FC<any> = ({ handleSubmit, profileData }) => {
  return (
    <div className={styles["posts-container"]}>
      <form onSubmit={handleSubmit} className={styles["create-post"]}>
        <div>
          <img src={profileData.photos.large} alt="avatar" />
          <Field
            type="text"
            component={FormTextarea}
            name="post"
            placeholder="What’s happening"
            validate={[required, maxLength100]}
          />
        </div>
        <button>Share</button>
      </form>
    </div>
  );
};

const PostReduxForm: any = reduxForm({ form: "post" })(PostForm);
