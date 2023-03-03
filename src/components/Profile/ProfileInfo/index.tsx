import { ProfileAPIData } from "../../../interfaces";
import styles from "./style.module.css";
import userImg from "./../../../assets/avatar.png";
import profileBg from "./../../../assets/bg-profile.jpg";

import { UserDetails } from "../UserDetails";

export const ProfileInfo: React.FC<ProfileAPIData> = (props) => {
  const { profileData, ownProfile, saveProfilePhotoThunk } = props;
  const { photos, fullName } = profileData;

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
        <UserDetails {...props} />
      </div>
    </>
  );
};
