import { PostsData } from "../../interfaces";
import { Posts } from "./Posts";
import { ProfileInfo } from "./ProfileInfo";

export const Profile: React.FC<PostsData> = ({ posts }) => {
  return (
    <>
      <ProfileInfo />
      <Posts posts={posts} />
    </>
  );
};
