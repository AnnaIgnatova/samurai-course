import { connect } from "react-redux";
import { StateData, UsersAPIData } from "../../interfaces";
import React from "react";
import { Users } from "../../components/Users";
import {
  followUserThunk,
  getUsersThunk,
  unfollowUserThunk,
} from "../../redux/reducers/UsersReducer";

class UsersAPIContainer extends React.Component<UsersAPIData> {
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
  users: state.usersPage.users,
  totalCount: state.usersPage.totalCount,
  pageCount: state.usersPage.pageCount,
  currentPage: state.usersPage.currentPage,
  isFetchingData: state.usersPage.isFetchingData,
  isUsersFollow: state.usersPage.isUsersFollow,
});

export const UsersContainer = connect(mapStateToProps, {
  followUserThunk,
  unfollowUserThunk,
  getUsersThunk,
})(UsersAPIContainer);
