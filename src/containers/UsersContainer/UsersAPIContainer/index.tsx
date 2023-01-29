import axios from "axios";
import React from "react";
import { Users } from "../../../components/Users";
import { UsersAPIData } from "../../../interfaces";

export class UsersAPIContainer extends React.Component<UsersAPIData> {
  componentDidMount(): void {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(({ data }: any) => {
        this.props.setTotalUserCount(data.totalCount);
        this.props.setUsersData(data.items);
      });
  }

  handlePage(page: number): void {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
      .then(({ data }: any) => {
        this.props.setUsersData(data.items);
        this.props.setCurrentPage(page);
      });
  }

  render() {
    return (
      <Users
        users={this.props.users}
        totalCount={this.props.totalCount}
        pageCount={this.props.pageCount}
        currentPage={this.props.currentPage}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        handlePage={this.handlePage.bind(this)}
      />
    );
  }
}
