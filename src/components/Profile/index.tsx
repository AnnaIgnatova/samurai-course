import { Posts } from "./Posts";
import { ProfileInfo } from "./ProfileInfo";

export const Profile: React.FC = () => {
  return (
    <>
      <ProfileInfo />
      <Posts />
    </>
  );
};
