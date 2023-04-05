import { UserData, UsersPageData } from "../../interfaces";
import styles from "./style.module.css";
import imgUrl from "./../../assets/avatar.png";
import React from "react";
import { Loader } from "../UI/Loader";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import { FilledButton } from "../UI/Button";
import { useDispatch } from "react-redux";

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
                <Link to={`/profile/${id}`}>
                  <img src={photos.small ? photos.small : imgUrl} alt={name} />
                </Link>
                <span>{name}</span>
                {status && <span>{status}</span>}
              </div>
              {followed && (
                <FilledButton
                  disabled={isUsersFollow.some((val) => val === id)}
                  onClick={() => dispatch(unfollowUserThunk(id))}
                  text="unfollow"
                />
              )}
              {!followed && (
                <FilledButton
                  disabled={isUsersFollow.some((val) => val === id)}
                  onClick={() => dispatch(followUserThunk(id))}
                  text="follow"
                />
              )}
            </div>
          ))}
        </>
      )}
      <Pagination
        currentPage={currentPage}
        handlePage={handlePage}
        totalCount={totalCount}
        pageCount={pageCount}
      />
    </div>
  );
};
