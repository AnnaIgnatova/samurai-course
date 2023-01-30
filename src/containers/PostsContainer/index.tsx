import { connect } from "react-redux";
import { Posts } from "../../components/Profile/Posts";
import { StateData } from "../../interfaces";
import { sendPost, updatePostText } from "../../redux/reducers/ProfileReducer";

const mapStateToProps = (state: StateData) => ({
  posts: state.profilePage.posts,
  newPost: state.profilePage.newPost,
});

export const PostsContainer = connect(mapStateToProps, {
  sendPost,
  updatePostText,
})(Posts);
