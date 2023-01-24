import { UsersPageData } from "../../interfaces";
import styles from "./style.module.css";
import axios from "axios";
import imgUrl from "./../../assets/avatar.png";

export const Users: React.FC<UsersPageData> = ({
  users,
  followUser,
  unfollowUser,
  setUsersData,
}) => {
  if (!users.length) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(({data}: any) => setUsersData(data.items));
  }

  return (
    <div className={styles.container}>
      {users.map(({ id, name, photos, followed }) => (
        <div key={id} className={styles.user}>
          <img src={photos.small ? photos.small : imgUrl} alt={name} />
          <span>{name}</span>
          <span>city</span>
          <span>country</span>
          {followed && (
            <button onClick={() => unfollowUser(id)}>unfollow</button>
          )}
          {!followed && <button onClick={() => followUser(id)}>follow</button>}
        </div>
      ))}
    </div>
  );
};
