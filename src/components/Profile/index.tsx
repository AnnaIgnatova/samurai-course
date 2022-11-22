import { Posts } from "./Posts";
import styles from "./style.module.css";

export const Profile: React.FC = () => {
  return (
    <>
      <img
        src="./assets/bg-profile.jpg"
        alt="user-bg"
        className={styles["profile-img"]}
      />
      <div className={styles["user-info"]}>
        <img src="./assets/avatar.png" alt="user avatar" />
        <div className={styles["user-details"]}>Name</div>
      </div>
      <Posts />
    </>
  );
};
