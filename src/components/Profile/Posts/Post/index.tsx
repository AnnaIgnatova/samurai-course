import styles from "./style.module.css";

export const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles["user-info"]}>
        <img src="./assets/user-avatar.png" alt="avatar" />
        <span>User name</span>
      </div>
      <div className={styles.content}>post content</div>
      <div className={styles.statistic}>
        like
        <img src="./assets/like.png" alt="like" />
      </div>
    </div>
  );
};
