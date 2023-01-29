import { connect } from "react-redux";
import { StateData, UserData } from "../../interfaces";
import {
  followUserActionCreator,
  setCurrentPageActionCreator,
  setFetchingDataActionCreator,
  setTotalUsersCountActionCreator,
  setUsersActionCreator,
  unfollowUserActionCreator,
} from "../../redux/reducers/UsersReducer";
import { UsersAPIContainer } from "./UsersAPIContainer";

const mapStateToProps = (state: StateData) => ({
  users: state.usersPage.users,
  totalCount: state.usersPage.totalCount,
  pageCount: state.usersPage.pageCount,
  currentPage: state.usersPage.currentPage,
  isFetchingData: state.usersPage.isFetchingData,
});

const mapDispatchToProps = (dispatch: any) => ({
  followUser: (id: number) => dispatch(followUserActionCreator(id)),
  unfollowUser: (id: number) => dispatch(unfollowUserActionCreator(id)),
  setUsersData: (users: UserData[]) => dispatch(setUsersActionCreator(users)),
  setCurrentPage: (page: number) => dispatch(setCurrentPageActionCreator(page)),
  setTotalUserCount: (count: number) =>
    dispatch(setTotalUsersCountActionCreator(count)),
  setFetchingData: (isFetching: boolean) =>
    dispatch(setFetchingDataActionCreator(isFetching)),
});

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIContainer);
