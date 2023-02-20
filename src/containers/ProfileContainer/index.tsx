import { connect } from "react-redux";
import { ProfileAPIData, ProfileRouteData, StateData } from "../../interfaces";
import React, { useEffect } from "react";
import { Profile } from "../../components/Profile";
import {
  getStatusDataThunk,
  getUserDataThunk,
  sendPost,
  updateStatusDataThunk,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/Loader";
import { useParams } from "react-router";
import { compose } from "redux";

const ProfileWithRouterContainer: React.FC<ProfileRouteData> = (props) => {
  const { id = "27789" } = useParams();
  return <ProfileAPIContainer {...props} userId={id || "27789"} />;
};

const ProfileAPIContainer: React.FC<ProfileAPIData> = (props) => {
  useEffect(() => {
    props.getUserDataThunk(props.userId);
    props.getStatusDataThunk(props.userId);
  }, []);

  return <>{props.profileData ? <Profile {...props} /> : <Loader />}</>;
};

const mapStateToProps = (state: StateData) => ({
  posts: state.profilePage.posts,
  profileData: state.profilePage.profileData,
  isAuth: state.header.isAuth,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    sendPost,
    getUserDataThunk,
    getStatusDataThunk,
    updateStatusDataThunk,
  })
)(ProfileWithRouterContainer);
