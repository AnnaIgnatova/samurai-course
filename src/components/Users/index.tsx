import { UserData } from "../../interfaces";
import styles from "./style.module.css";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Loader } from "../UI/Loader";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Avatar, Button, Pagination, Space } from "antd";

export interface UsersProps {
  users: UserData[];
  totalCount: number;
  pageCount: number;
  currentPage: number;
  isFetchingData: boolean;
  isUsersFollow: number[];
  handlePage(page: number): void;
  unfollowUserThunk: any;
  followUserThunk: any;
}

export const Users: React.FC<UsersProps> = ({
  users,
  totalCount,
  pageCount,
  currentPage,
  isFetchingData,
  isUsersFollow,
  handlePage,
  unfollowUserThunk,
  followUserThunk,
}) => {
  const dispatch: any = useDispatch();

  return (
    <div className={styles.container}>
      {isFetchingData ? (
        <Loader />
      ) : (
        <>
          {users.map(({ id, name, photos, followed, status }) => (
            <div key={id} className={styles.user}>
              <div>
                <Space size={20} wrap>
                  <Link to={`/profile/${id}`}>
                    {photos.small ? (
                      <Avatar src={photos.large} size={80} />
                    ) : (
                      <Avatar icon={<UserOutlined />} size={80} />
                    )}
                  </Link>
                  <span>{name}</span>
                </Space>
              </div>
              {followed ? (
                <Button
                  size="large"
                  disabled={isUsersFollow.some((val) => val === id)}
                  onClick={() => dispatch(unfollowUserThunk(id))}
                >
                  unfollow
                </Button>
              ) : (
                <Button
                  type="primary"
                  size="large"
                  disabled={isUsersFollow.some((val) => val === id)}
                  onClick={() => dispatch(followUserThunk(id))}
                >
                  follow
                </Button>
              )}
            </div>
          ))}
        </>
      )}
      <div className={styles["pagination-container"]}>
        <Pagination
          defaultCurrent={1}
          total={totalCount}
          onChange={handlePage}
        />
      </div>
    </div>
  );
};
