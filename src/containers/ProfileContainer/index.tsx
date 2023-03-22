import { connect } from "react-redux";
import { Post, ProfileUserData, StateData } from "../../interfaces";
import React, { useEffect } from "react";
import { Profile } from "../../components/Profile";
import {
  getStatusDataThunk,
  getUserDataThunk,
  ProfileActionCreators,
  updateStatusDataThunk,
  saveProfileInfoThunk,
  saveProfilePhotoThunk,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/UI/Loader";
import { useParams } from "react-router";

export interface ProfileApiContainerData extends ProfileWithRouteContainerData {
  userId: string;
  ownProfile: boolean;
}

const ProfileWithRouterContainer: React.FC<ProfileWithRouteContainerData> = (
  props
) => {
  const { id = "27789" } = useParams();
  return (
    <ProfileAPIContainer
      {...props}
      userId={id || "27789"}
      ownProfile={id === "27789"}
    />
  );
};

export interface ProfileWithRouteContainerData {
  status: string | null;
  posts: Post[];
  isAuth: boolean;
  profileData: ProfileUserData;
  getUserDataThunk: any;
  getStatusDataThunk: any;
  sendPost: any;
  updateStatusDataThunk: any;
  saveProfilePhotoThunk: any;
  saveProfileInfoThunk: any;
}

const ProfileAPIContainer: React.FC<ProfileApiContainerData> = (props) => {
  const { userId } = props;

  useEffect(() => {
    props.getUserDataThunk(props.userId);
    props.getStatusDataThunk(props.userId);
  }, [userId]);

  return <>{props.profileData ? <Profile {...props} /> : <Loader />}</>;
};

const mapStateToProps = (state: StateData) => ({
  posts: state.profilePage.posts,
  profileData: state.profilePage.profileData,
  isAuth: state.header.isAuth,
  status: state.profilePage.status,
});

export default connect(mapStateToProps, {
  ...ProfileActionCreators,
  getUserDataThunk,
  getStatusDataThunk,
  updateStatusDataThunk,
  saveProfilePhotoThunk,
  saveProfileInfoThunk,
})(ProfileWithRouterContainer);
