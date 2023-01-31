import { PostsContainer } from "../../containers/PostsContainer";
import { ProfileAPIData } from "../../interfaces";
import { ProfileInfo } from "./ProfileInfo";

export const Profile: React.FC<ProfileAPIData> = (props) => {
  return (
    <>
      <ProfileInfo {...props} />
      <PostsContainer {...props} />
    </>
  );
};
