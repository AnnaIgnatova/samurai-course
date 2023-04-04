import React from "react";
import { useDispatch } from "react-redux";
import { Post as PostType } from "../../../interfaces";
import { ProfileUserData } from "../../../interfaces/profile";
import { ProfileActionCreators } from "../../../redux/reducers/ProfileReducer";
import { maxLength } from "../../../utils/validators";
import { Post } from "./Post";
import styles from "./style.module.css";

const maxLength100 = maxLength(100);

interface PostsProps {
  profileData: ProfileUserData;
  posts: PostType[];
}

export const Posts: React.FC<PostsProps> = React.memo(
  ({ posts, profileData }) => {
    const dispatch = useDispatch();
    const sendPostData = (data: { post: string }) => {
      dispatch(ProfileActionCreators.sendPost(data.post));
    };

    return (
      <div className={styles["posts-container"]}>
        <div className={styles["create-post"]}>
          {/* <PostReduxForm onSubmit={sendPostData} profileData={profileData} /> */}
        </div>
        <div>
          {posts.map(({ id, ...data }) => (
            <Post key={id} id={id} {...data} />
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
          {/* <Field
            type="text"
            component={FormTextarea}
            name="post"
            placeholder="What’s happening"
            validate={[required, maxLength100]}
          /> */}
        </div>
        <button>Share</button>
      </form>
    </div>
  );
};

//const PostReduxForm: any = reduxForm({ form: "post" })(PostForm);
