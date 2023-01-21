import { connect } from "react-redux";
import { Posts } from "../../components/Profile/Posts";
import { StateData } from "../../interfaces";
import {
  createPostActionCreator,
  updatePostTextActionCreator,
} from "../../redux/reducers/ProfileReducer";

const mapStateToProps = (state: StateData) => ({
  posts: state.profilePage.posts,
  newPost: state.profilePage.newPost,
});

const mapDispatchToProps = (dispatch: any) => ({
  sendPost: () => dispatch(createPostActionCreator()),
  handleChange: (text: string) => dispatch(updatePostTextActionCreator(text)),
});

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
