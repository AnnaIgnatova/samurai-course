import { PostsContainer } from "../../containers/PostsContainer";
import { ProfileInfo } from "./ProfileInfo";

export const Profile: React.FC = () => {
  return (
    <>
      <ProfileInfo />
      <PostsContainer  />
    </>
  );
};
