import { ProfilePageData } from "../../interfaces";
import { Posts } from "./Posts";
import { ProfileInfo } from "./ProfileInfo";

export const Profile: React.FC<ProfilePageData> = ({ state }) => {
  return (
    <>
      <ProfileInfo />
      <Posts posts={state.posts} />
    </>
  );
};
