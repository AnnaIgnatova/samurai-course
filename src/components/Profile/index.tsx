import { ProfilePageData } from "../../interfaces";
import { Posts } from "./Posts";
import { ProfileInfo } from "./ProfileInfo";

export const Profile: React.FC<ProfilePageData> = ({ state, createPost }) => {
  return (
    <>
      <ProfileInfo />
      <Posts posts={state.posts} createPost={createPost} />
    </>
  );
};
