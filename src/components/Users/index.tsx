import { UsersPageData } from "../../interfaces";
import styles from "./style.module.css";
import imgUrl from "./../../assets/avatar.png";
import React from "react";
import { Loader } from "../Loader";
import { Link } from "react-router-dom";

export const Users: React.FC<UsersPageData> = ({
  users,
  handlePage,
  unfollowUser,
  followUser,
  currentPage,
  isFetchingData,
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
                <button onClick={() => unfollowUser(id)}>unfollow</button>
              )}
              {!followed && (
                <button onClick={() => followUser(id)}>follow</button>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
