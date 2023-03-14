import { PostsContainer } from "../../containers/PostsContainer";
import { ProfileAPIData, ProfileComponentData } from "../../interfaces";
import { ProfileInfo } from "./ProfileInfo";

export const Profile: React.FC<ProfileComponentData> = (props) => {
  return (
    <>
      <ProfileInfo {...props} />
      <PostsContainer {...props} />
    </>
  );
};
