import { PostData } from "../../interfaces";
import styles from "./style.module.css";

export const Post: React.FC<PostData> = ({ message, likes }) => {
  return (
    <div className={styles.post}>
      <div className={styles["user-info"]}>
        <img src="./assets/user-avatar.png" alt="avatar" />
        <span>User name</span>
      </div>
      <div className={styles.content}>{message}</div>
      <div className={styles.statistic}>
        <img src="./assets/like.png" alt="like" />
        {likes}
      </div>
    </div>
  );
};
