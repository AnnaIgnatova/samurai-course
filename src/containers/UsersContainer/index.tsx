import { connect } from "react-redux";
import { StateData, UserData, UsersAPIContainerType } from "../../interfaces";
import React from "react";
import { Users } from "../../components/Users";
import {
  followUserThunk,
  getUsersThunk,
  unfollowUserThunk,
} from "../../redux/reducers/UsersReducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getIsAuth,
  getIsFetchingData,
  getIsUsersFollow,
  getPageCount,
  getTotalUsersCount,
  getUsersSelector,
} from "../../redux/reducers/UsersSelector";

class UsersAPIContainer extends React.Component<UsersAPIContainerType> {
  componentDidMount(): void {
    this.props.getUsersThunk();
  }

  handlePage(page: number): void {
    this.props.getUsersThunk(page);
  }

  render() {
    return <Users {...this.props} handlePage={this.handlePage.bind(this)} />;
  }
}

const mapStateToProps = (state: StateData) => ({
  users: getUsersSelector(state),
  totalCount: getTotalUsersCount(state),
  pageCount: getPageCount(state),
  currentPage: getCurrentPage(state),
  isFetchingData: getIsFetchingData(state),
  isUsersFollow: getIsUsersFollow(state),
  isAuth: getIsAuth(state),
});

export default compose<React.ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, {
    followUserThunk,
    unfollowUserThunk,
    getUsersThunk,
  })
)(UsersAPIContainer);
