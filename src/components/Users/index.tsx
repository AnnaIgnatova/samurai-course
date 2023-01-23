import { UsersPageData } from "../../interfaces";
import styles from "./style.module.css";

export const Users: React.FC<UsersPageData> = ({
  users,
  followUser,
  unfollowUser,
  setUsersData,
}) => {
  return (
    <div className={styles.container}>
      {users.map(({ id, name, imgUrl, location, isFollow }) => (
        <div key={id} className={styles.users}>
          <img src={imgUrl} alt={name} />
          <span>{name}</span>
          <span>{location.city}</span>
          <span>{location.country}</span>
          {isFollow && (
            <button onClick={() => unfollowUser(id)}>unfollow</button>
          )}
          {!isFollow && <button onClick={() => followUser(id)}>follow</button>}
        </div>
      ))}
    </div>
  );
};
