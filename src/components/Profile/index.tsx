import { ProfilePageData } from "../../interfaces";
import { Posts } from "./Posts";
import { ProfileInfo } from "./ProfileInfo";

export const Profile: React.FC<ProfilePageData> = ({
  state,
  createPost,
  updatePostText,
}) => {
  return (
    <>
      <ProfileInfo />
      <Posts
        posts={state.posts}
        newPost={state.newPost}
        createPost={createPost}
        updatePostText={updatePostText}
      />
    </>
  );
};
