import { connect } from "react-redux";
import { StateData } from "../../interfaces";
import React, { useEffect } from "react";
import { Profile, ProfileInfoData } from "../../components/Profile";
import {
  getStatusDataThunk,
  getUserDataThunk,
  ProfileActionCreators,
  updateStatusDataThunk,
  saveProfileInfoThunk,
  saveProfilePhotoThunk,
  ProfileActionCreatorsType,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/UI/Loader";
import { useParams } from "react-router";
import { compose, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../../redux";

type MapStateType = ReturnType<typeof mapStateToProps>;
type DispatchStateType = {
  getUserDataThunk: (
    userId: string
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
  getStatusDataThunk: (
    userId: string
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
  updateStatusDataThunk: (
    text: string
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
  saveProfilePhotoThunk: (
    file: File
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
  saveProfileInfoThunk: (
    info: ProfileInfoData
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
};

type ProfileAPIComponentType = {
  userId: string;
  ownProfile: boolean;
};

const ProfileWithRouterContainer: React.FC<
  MapStateType & DispatchStateType & ProfileActionCreatorsType
> = (props) => {
  const { id = "27789" } = useParams();
  return (
    <ProfileAPIContainer
      {...props}
      userId={id || "27789"}
      ownProfile={id === "27789"}
    />
  );
};

export type ProfileComponentType = MapStateType &
  DispatchStateType &
  ProfileActionCreatorsType &
  ProfileAPIComponentType;

const ProfileAPIContainer: React.FC<ProfileComponentType> = (props) => {
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

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    ...ProfileActionCreators,
    getUserDataThunk,
    getStatusDataThunk,
    updateStatusDataThunk,
    saveProfilePhotoThunk,
    saveProfileInfoThunk,
  })
)(ProfileWithRouterContainer);
