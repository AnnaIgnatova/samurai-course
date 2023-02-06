import { UsersPageData } from "../../interfaces";
import styles from "./style.module.css";
import imgUrl from "./../../assets/avatar.png";
import React from "react";
import { Loader } from "../Loader";
import { Link } from "react-router-dom";
import { followUserAPI, unfollowUserAPI } from "../../api";

export const Users: React.FC<UsersPageData> = ({
  users,
  handlePage,
  unfollowUser,
  setUserFollowed,
  followUser,
  currentPage,
  isFetchingData,
  isUsersFollow,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.pages}>
        {Array.from(Array(10).keys()).map((page) => (
          <div
            className={`${styles.page} ${
              currentPage === page + 1 && styles["active-page"]
            }`}
            onClick={() => handlePage(page + 1)}
          >
            {page + 1}
          </div>
        ))}
      </div>
      {isFetchingData ? (
        <Loader />
      ) : (
        <>
          {users.map(({ id, name, photos, followed }) => (
            <div key={id} className={styles.user}>
              <Link to={`/profile/${id}`}>
                <img src={photos.small ? photos.small : imgUrl} alt={name} />
              </Link>
              <span>{name}</span>
              <span>city</span>
              <span>country</span>
              {followed && (
                <button
                  disabled={isUsersFollow.some((val) => val === id)}
                  onClick={async () => {
                    setUserFollowed(id, true);
                    unfollowUserAPI(id).then(() => {
                      unfollowUser(id);
                      setUserFollowed(id, false);
                    });
                  }}
                >
                  unfollow
                </button>
              )}
              {!followed && (
                <button
                  disabled={isUsersFollow.some((val) => val === id)}
                  onClick={async () => {
                    setUserFollowed(id, true);
                    followUserAPI(id).then(() => {
                      setUserFollowed(id, false);
                      followUser(id);
                    });
                  }}
                >
                  follow
                </button>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
