import { PostData } from "../../interfaces";
import styles from "./style.module.css";
import userAvatarUrl from "../../../../assets/user-avatar.png";
import likeUrl from "../../../../assets/like.svg";
import commentUrl from "../../../../assets/comment.svg";
import shareUrl from "../../../../assets/share.svg";

export const Post: React.FC<any> = (props) => {
  const { message, likes, profileData, comments, shares, pinned } = props;
  return (
    <div className={styles.post}>
      <img src={profileData.photos.large} alt="avatar" />
      <div className={styles["post-content"]}>
        <span className={styles["user-info"]}>{profileData.fullName}</span>
        <span className={styles.content}>{message}</span>
        <div className={styles["post-navbar"]}>
          <div className={styles.statistic}>
            <img src={likeUrl} alt="like" />
            <span>{likes}</span>
          </div>
          <div className={styles.statistic}>
            <img src={commentUrl} alt="comment" />
            <span>{comments}</span>
          </div>
          <div className={styles.statistic}>
            <img src={shareUrl} alt="share" />
            <span>{shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
