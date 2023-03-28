import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import PostsContainer from "../../containers/PostsContainer";
import { ProfileComponentType } from "../../containers/ProfileContainer";
import { Post, ProfileUserData } from "../../interfaces";
import { AppState } from "../../redux";
import { ProfileReducerPayloadType } from "../../redux/reducers/ProfileReducer";
import { ProfileInfo } from "./ProfileInfo";

export interface ProfileInfoData {
  profileData: ProfileUserData;
  saveProfilePhotoThunk: ThunkAction<
    Promise<void>,
    AppState,
    unknown,
    Action<string>
  >;
  status: string | null;
  isAuth: boolean;
  updateStatusDataThunk: (
    text: string
  ) => (dispatch: Dispatch<ProfileReducerPayloadType>) => void;
}

export interface PostsData extends ProfileInfoData {
  posts: Post[];
  sendPost: (post: string) => void;
  likePost: (id: number) => void;
  removeLike: (id: number) => void;
  pinPost: (id: number) => void;
}

type ProfileType = ProfileComponentType;

export const Profile: React.FC<ProfileType> = (props) => {
  return (
    <>
      <ProfileInfo {...props} />
      <PostsContainer />
    </>
  );
};
