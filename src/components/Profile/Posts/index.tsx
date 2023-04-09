import { List } from "antd";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { PostData } from "../../../interfaces";
import { ProfileUserData } from "../../../interfaces/profile";
import { ProfileActionCreators } from "../../../redux/reducers/ProfileReducer";
import { Post } from "./Post";
import styles from "./style.module.css";

interface PostsProps {
  profileData: ProfileUserData;
  posts: PostData[];
  likePost: any;
  removeLike: any;
  pinPost: any;
}

export const Posts: React.FC<PostsProps> = React.memo(
  ({ posts, profileData, likePost, removeLike, pinPost }) => {
    const dispatch = useDispatch();
    const sendPostData = (post: string) => {
      dispatch(ProfileActionCreators.sendPost(post));
    };

    return (
      <div className={styles["posts-container"]}>
        <div className={styles["create-post"]}>
          <PostForm handleSubmit={sendPostData} profileData={profileData} />
        </div>
        <div>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={posts}
            renderItem={({ id, ...data }) => (
              <Post
                key={id}
                id={id}
                profileData={profileData}
                likePost={likePost}
                removeLike={removeLike}
                pinPost={pinPost}
                {...data}
              />
            )}
          />
        </div>
      </div>
    );
  }
);

const PostForm: React.FC<any> = ({ handleSubmit, profileData }) => {
  console.log("profileData=", profileData);
  return (
    <div className={styles["posts-container"]}>
      <Formik
        initialValues={{
          post: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values.post);
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <img src={profileData.photos.large} alt="avatar" />
              <input
                type="text"
                name="post"
                placeholder="What’s happening"
                onChange={handleChange}
                value={values.post}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Share
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
