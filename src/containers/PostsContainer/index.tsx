import { connect } from "react-redux";
import { Posts } from "../../components/Profile/Posts";
import { StateData } from "../../interfaces";
import { ProfileActionCreators } from "../../redux/reducers/ProfileReducer";

const mapStateToProps = (state: StateData) => ({
  posts: state.profilePage.posts,
  profileData: state.profilePage.profileData,
});

export const PostsContainer = connect(mapStateToProps, {
  ...ProfileActionCreators,
})(Posts);
