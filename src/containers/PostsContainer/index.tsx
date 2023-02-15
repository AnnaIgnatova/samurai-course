import { connect } from "react-redux";
import { Posts } from "../../components/Profile/Posts";
import { StateData } from "../../interfaces";
import { sendPost } from "../../redux/reducers/ProfileReducer";

const mapStateToProps = (state: StateData) => ({
  posts: state.profilePage.posts,
});

export const PostsContainer = connect(mapStateToProps, {
  sendPost,
})(Posts);
