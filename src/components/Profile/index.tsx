import { PostsContainer } from "../../containers/PostsContainer";
import { ProfileInfo } from "./ProfileInfo";

export const Profile: React.FC<any> = ({store}) => {
  return (
    <>
      <ProfileInfo />
      <PostsContainer store={store} />
    </>
  );
};
