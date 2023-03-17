import { PostsContainer } from "../../containers/PostsContainer";
import { ProfileApiContainerData } from "../../containers/ProfileContainer";
import { Post, ProfileUserData } from "../../interfaces";
import { ProfileInfo } from "./ProfileInfo";

export interface ProfileInfoData extends ProfileApiContainerData {
  profileData: ProfileUserData;
  saveProfilePhotoThunk: any;
  status: string | null;
  isAuth: boolean;
  updateStatusDataThunk: any;
}

export interface PostsData extends ProfileInfoData {
  posts: Post[];
  sendPost: (post: string) => void;
  likePost: (id: number) => void;
  removeLike: (id: number) => void;
  pinPost: (id: number) => void;
}

type ProfileType = ProfileInfoData;

export const Profile: React.FC<ProfileType> = (props) => {
  return (
    <>
      <ProfileInfo {...props} />
      <PostsContainer {...props} />
    </>
  );
};
