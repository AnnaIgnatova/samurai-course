import { ProfileAPIData } from "../../../interfaces";
import styles from "./style.module.css";
import userImg from "./../../../assets/avatar.png";
import profileBg from "./../../../assets/bg-profile.jpg";

import { UserDetails } from "../UserDetails";
import { ProfileInfoFormContainer } from "../ProfileInfoForm";
import React from "react";

export const ProfileInfo: React.FC<ProfileAPIData> = (props) => {
  const {
    profileData,
    ownProfile,
    saveProfilePhotoThunk,
    saveProfileInfoThunk,
  } = props;
  const { photos, fullName } = profileData;
  const [isEditMode, setEditMode] = React.useState(false);

  const changePhoto = (e: any) => {
    const { target } = e;
    target.files[0] && saveProfilePhotoThunk(target.files[0]);
  };

  const modeOffEditMode = (values: any) => {
    saveProfileInfoThunk(values).then((res: any) => !res && setEditMode(false));
  };

  return (
    <>
      <img src={profileBg} alt="user-bg" className={styles["profile-img"]} />
      <div className={styles["user-info"]}>
        <div>
          <img src={photos.small ? photos.small : userImg} alt={fullName} />
          {ownProfile && <input type="file" onChange={changePhoto} />}
        </div>
        {!isEditMode ? (
          <UserDetails {...props} toggleEditMode={() => setEditMode(true)} />
        ) : (
          <ProfileInfoFormContainer
            profile={profileData}
            toggleEditMode={modeOffEditMode}
          />
        )}
      </div>
    </>
  );
};
