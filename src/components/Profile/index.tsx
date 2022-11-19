import styles from "./style.module.css";

export const Profile = () => {
  return (
    <div className={styles.content}>
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
        alt="user-bg"
      />
      <div className={styles["user-info"]}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png"
          alt="user avatar"
        />
        <div>user details</div>
      </div>
      <div>
        <div>create post</div>
        <div>
          <div></div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};
