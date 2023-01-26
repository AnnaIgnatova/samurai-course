import { UsersPageData } from "../../interfaces";
import styles from "./style.module.css";
import axios from "axios";
import imgUrl from "./../../assets/avatar.png";
import React from "react";

export class Users extends React.Component<UsersPageData> {
  componentDidMount(): void {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(({ data }: any) => this.props.setUsersData(data.items));
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.users.map(({ id, name, photos, followed }) => (
          <div key={id} className={styles.user}>
            <img src={photos.small ? photos.small : imgUrl} alt={name} />
            <span>{name}</span>
            <span>city</span>
            <span>country</span>
            {followed && (
              <button onClick={() => this.props.unfollowUser(id)}>
                unfollow
              </button>
            )}
            {!followed && (
              <button onClick={() => this.props.followUser(id)}>follow</button>
            )}
          </div>
        ))}
      </div>
    );
  }
}
