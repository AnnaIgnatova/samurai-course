import { connect } from "react-redux";
import { Users } from "../../components/Users";
import { StateData, UserData } from "../../interfaces";
import {
  followUserActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  setUsersActionCreator,
  unfollowUserActionCreator,
} from "../../redux/reducers/UsersReducer";

const mapStateToProps = (state: StateData) => ({
  users: state.usersPage.users,
  totalCount: state.usersPage.totalCount,
  pageCount: state.usersPage.pageCount,
  currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch: any) => ({
  followUser: (id: number) => dispatch(followUserActionCreator(id)),
  unfollowUser: (id: number) => dispatch(unfollowUserActionCreator(id)),
  setUsersData: (users: UserData[]) => dispatch(setUsersActionCreator(users)),
  setCurrentPage: (page: number) => dispatch(setCurrentPageActionCreator(page)),
  setTotalUserCount: (count: number) =>
    dispatch(setTotalUsersCountActionCreator(count)),
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
