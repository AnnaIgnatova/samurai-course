import { connect } from "react-redux";
import { ProfileAPIData, ProfileRouteData, StateData } from "../../interfaces";
import axios from "axios";
import React from "react";
import { Profile } from "../../components/Profile";
import {
  sendPost,
  setProfileData,
  updatePostText,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/Loader";
import { useParams } from "react-router";

const ProfileWithRouterContainer: React.FC<ProfileRouteData> = (props) => {
  const { id } = useParams();
  return <ProfileAPIContainer {...props} userId={id} />;
};

class ProfileAPIContainer extends React.Component<ProfileAPIData> {
  componentDidMount(): void {
    this.props.userId &&
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`
        )
        .then(({ data }: any) => {
          this.props.setProfileData(data);
        });
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
  setProfileData,
  updatePostText,
})(ProfileWithRouterContainer);
