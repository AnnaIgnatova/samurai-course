import { UsersPageData } from "../../interfaces";
import styles from "./style.module.css";
import imgUrl from "./../../assets/avatar.png";
import React from "react";
import { Loader } from "../UI/Loader";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";

export const Users: React.FC<UsersPageData> = ({
  users,
  totalCount,
  pageCount,
  handlePage,
  unfollowUserThunk,
  followUserThunk,
  currentPage,
  isFetchingData,
  isUsersFollow,
}) => {
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
                <button
                  disabled={isUsersFollow.some((val) => val === id)}
                  onClick={() => unfollowUserThunk(id)}
                >
                  unfollow
                </button>
              )}
              {!followed && (
                <button
                  disabled={isUsersFollow.some((val) => val === id)}
                  onClick={() => followUserThunk(id)}
                >
                  follow
                </button>
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
