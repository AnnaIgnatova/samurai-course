import { PostData } from "../../interfaces";
import styles from "./style.module.css";
import userAvatarUrl from "../../../../assets/user-avatar.png";
import likeUrl from "../../../../assets/like.svg";
import activeLike from "../../../../assets/activeLike.svg";
import commentUrl from "../../../../assets/comment.svg";
import shareUrl from "../../../../assets/share.svg";
import pinUrl from "../../../../assets/pin.svg";
import pinnedUrl from "../../../../assets/pinned.svg";
import React from "react";

export const Post: React.FC<any> = (props) => {
  const {
    message,
    likes,
    profileData,
    comments,
    shares,
    pinned,
    postDate,
    likePost,
    removeLike,
    pinPost,
    id,
  } = props;
  const [isLiked, setLiked] = React.useState<boolean>(false);

  const handleLikePost = () => {
    if (isLiked) removeLike(id);
    else likePost(id);
    setLiked(!isLiked);
  };
  return (
    <div className={styles.post}>
      <img src={profileData.photos.large || userAvatarUrl} alt="avatar" />
      <div className={styles["post-content"]}>
        <div className={styles["user-info"]}>
          <span>{profileData.fullName}</span>
          <span>
            {new Date(postDate).toLocaleString("en-GB", {
              day: "numeric",
              month: "long",
            })}
          </span>
        </div>
        <span className={styles.content}>{message}</span>
        <div className={styles["post-navbar"]}>
          <div className={`${styles.statistic} ${isLiked ? styles.liked : ""}`}>
            <img
              src={isLiked ? activeLike : likeUrl}
              alt="like"
              onClick={handleLikePost}
            />
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
          <div className={styles.statistic}>
            <img
              src={pinned ? pinnedUrl : pinUrl}
              alt="pin"
              onClick={() => pinPost(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
