import { connect } from "react-redux";
import { Users } from "../../components/Users";
import { StateData, UserData } from "../../interfaces";
import {
  followUserActionCreator,
  setUsersActionCreator,
  unfollowUserActionCreator,
} from "../../redux/reducers/UsersReducer";

const mapStateToProps = (state: StateData) => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch: any) => ({
  followUser: (id: number) => dispatch(followUserActionCreator(id)),
  unfollowUser: (id: number) => dispatch(unfollowUserActionCreator(id)),
  setUsersData: (users: UserData[]) => dispatch(setUsersActionCreator(users)),
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
