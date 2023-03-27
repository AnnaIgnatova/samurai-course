import { connect } from "react-redux";
import { Posts } from "../../components/Profile/Posts";
import { StateData } from "../../interfaces";
import { ProfileActionCreators } from "../../redux/reducers/ProfileReducer";
import { compose } from "redux";

const mapStateToProps = (state: StateData) => ({
  posts: state.profilePage.posts,
  profileData: state.profilePage.profileData,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    ...ProfileActionCreators,
  })
)(Posts);
