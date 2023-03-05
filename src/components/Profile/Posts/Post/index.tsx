import { PostData } from "../../interfaces";
import styles from "./style.module.css";
import userAvatarUrl from "../../../../assets/user-avatar.png";
import likeUrl from "../../../../assets/like.png";

export const Post: React.FC<any> = ({ message, likes, profileData }) => {
  return (
    <div className={styles.post}>
      <div className={styles["user-info"]}>
        <img src={profileData.photos.large} alt="avatar" />
        <span>{profileData.fullName}</span>
      </div>
      <div className={styles.content}>{message}</div>
      <div className={styles.statistic}>
        <img src={likeUrl} alt="like" />
        {likes}
      </div>
    </div>
  );
};
