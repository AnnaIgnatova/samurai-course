import { ProfileAPIData } from "../../../interfaces";
import styles from "./style.module.css";
import userImg from "./../../../assets/avatar.png";
import profileBg from "./../../../assets/bg-profile.jpg";
import { Status } from "../Status";

export const ProfileInfo: React.FC<ProfileAPIData> = ({
  profileData,
  status,
  ownProfile,
  updateStatusDataThunk,
  saveProfilePhotoThunk,
}) => {
  const {
    photos,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    contacts,
  } = profileData;

  const changePhoto = (e: any) => {
    const { target } = e;
    target.files[0] && saveProfilePhotoThunk(target.files[0]);
  };

  return (
    <>
      <img src={profileBg} alt="user-bg" className={styles["profile-img"]} />
      <div className={styles["user-info"]}>
        <div>
          <img src={photos.small ? photos.small : userImg} alt={fullName} />
          {ownProfile && <input type="file" onChange={changePhoto} />}
        </div>
        <div className={styles["details-container"]}>
          <Status text={status} updateStatus={updateStatusDataThunk} />
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
          <button>edit data</button>
        </div>
      </div>
    </>
  );
};
