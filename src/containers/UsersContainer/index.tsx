import { connect } from "react-redux";
import { StateData, UsersAPIData } from "../../interfaces";
import React from "react";
import { Users } from "../../components/Users";
import {
  followUser,
  setCurrentPage,
  setFetchingData,
  setTotalUsersCount,
  setUsers,
  unfollowUser,
} from "../../redux/reducers/UsersReducer";
import { getUsers } from "../../api";

class UsersAPIContainer extends React.Component<UsersAPIData> {
  componentDidMount(): void {
    this.props.setFetchingData(true);
    getUsers().then((data) => {
      this.props.setTotalUsersCount(data.totalCount);
      this.props.setUsers(data.items);
      this.props.setFetchingData(false);
    });
  }

  handlePage(page: number): void {
    this.props.setFetchingData(true);
    getUsers(page).then((data) => {
      this.props.setUsers(data.items);
      this.props.setCurrentPage(page);
      this.props.setFetchingData(false);
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
});

export const UsersContainer = connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setFetchingData,
})(UsersAPIContainer);
