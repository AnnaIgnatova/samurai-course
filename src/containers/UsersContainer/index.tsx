import { connect } from "react-redux";
import { StateData, UsersAPIData } from "../../interfaces";
import React from "react";
import { Users } from "../../components/Users";
import {
  followUser,
  setCurrentPage,
  setFetchingData,
  setTotalUsersCount,
  setUserFollowed,
  setUsers,
  unfollowUser,
} from "../../redux/reducers/UsersReducer";
import { getUsers } from "../../api";

class UsersAPIContainer extends React.Component<UsersAPIData> {
  componentDidMount(): void {
    this.props.setFetchingData(true);
    getUsers().then((data) => {
      this.props.setFetchingData(false);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.setUsers(data.items);
    });
  }

  handlePage(page: number): void {
    this.props.setFetchingData(true);
    getUsers(page).then((data) => {
      this.props.setFetchingData(false);
      this.props.setUsers(data.items);
      this.props.setCurrentPage(page);
    });
  }

  render() {
    return <Users {...this.props} handlePage={this.handlePage.bind(this)} />;
  }
}

const mapStateToProps = (state: StateData) => ({
  users: state.usersPage.users,
  totalCount: state.usersPage.totalCount,
  pageCount: state.usersPage.pageCount,
  currentPage: state.usersPage.currentPage,
  isFetchingData: state.usersPage.isFetchingData,
  isUsersFollow: state.usersPage.isUsersFollow,
});

export const UsersContainer = connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setFetchingData,
  setUserFollowed,
})(UsersAPIContainer);
