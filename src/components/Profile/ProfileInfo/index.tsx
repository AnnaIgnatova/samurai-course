import { ProfileAPIData } from "../../../interfaces";
import styles from "./style.module.css";
import userImg from "./../../../assets/avatar.png";

export const ProfileInfo: React.FC<ProfileAPIData> = ({ profileData }) => {
  const {
    photos,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    contacts,
  } = profileData;

  return (
    <>
      <img
        src="./assets/bg-profile.jpg"
        alt="user-bg"
        className={styles["profile-img"]}
      />
      <div className={styles["user-info"]}>
        <img src={photos.small ? photos.small : userImg} alt={fullName} />
        <div className={styles["details-container"]}>
          <span className={styles["user-details"]}>{fullName}</span>
          <span className={styles["user-details"]}>
            looking for a job: {lookingForAJob ? "yes" : "no"}
          </span>
          <span className={styles["user-details"]}>
            {lookingForAJobDescription}
          </span>
          <span className={styles["user-details"]}>vk: {contacts.vk}</span>
          <span className={styles["user-details"]}>
            inst: {contacts.instagram}
          </span>
          <span className={styles["user-details"]}>yt: {contacts.youtube}</span>
        </div>
      </div>
    </>
  );
};
