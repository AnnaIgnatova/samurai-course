import { connect } from "react-redux";
import { ProfileAPIData, ProfileRouteData, StateData } from "../../interfaces";
import React from "react";
import { Profile } from "../../components/Profile";
import {
  getUserDataThunk,
  sendPost,
  setProfileData,
  updatePostText,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/Loader";
import { useParams } from "react-router";

const ProfileWithRouterContainer: React.FC<ProfileRouteData> = (props) => {
  const { id } = useParams();
  return <ProfileAPIContainer {...props} userId={id || "27789"} />;
};

class ProfileAPIContainer extends React.Component<ProfileAPIData> {
  componentDidMount(): void {
    this.props.getUserDataThunk(this.props.userId);
  }

  render() {
    return (
      <>{this.props.profileData ? <Profile {...this.props} /> : <Loader />}</>
    );
  }
}

const mapStateToProps = (state: StateData) => ({
  posts: state.profilePage.posts,
  newPost: state.profilePage.newPost,
  profileData: state.profilePage.profileData,
});

export const ProfileContainer = connect(mapStateToProps, {
  sendPost,
  updatePostText,
  getUserDataThunk,
})(ProfileWithRouterContainer);
