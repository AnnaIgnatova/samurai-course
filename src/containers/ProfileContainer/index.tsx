import { connect } from "react-redux";
import { ProfileAPIData, ProfileRouteData, StateData } from "../../interfaces";
import React from "react";
import { Profile } from "../../components/Profile";
import {
  getStatusDataThunk,
  getUserDataThunk,
  sendPost,
  updateStatusDataThunk,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/Loader";
import { useParams } from "react-router";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

const ProfileWithRouterContainer: React.FC<ProfileRouteData> = (props) => {
  const { id = "27789"} = useParams();
  return <ProfileAPIContainer {...props} userId={id || "27789"} />;
};

class ProfileAPIContainer extends React.Component<ProfileAPIData> {
  componentDidMount(): void {
    this.props.getUserDataThunk(this.props.userId);
    this.props.getStatusDataThunk(this.props.userId);
  }

  render() {
    return (
      <>{this.props.profileData ? <Profile {...this.props} /> : <Loader />}</>
    );
  }
}

const mapStateToProps = (state: StateData) => ({
  posts: state.profilePage.posts,
  profileData: state.profilePage.profileData,
  isAuth: state.header.isAuth,
  status: state.profilePage.status,
});

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, {
    sendPost,
    getUserDataThunk,
    getStatusDataThunk,
    updateStatusDataThunk,
  })
)(ProfileWithRouterContainer);
