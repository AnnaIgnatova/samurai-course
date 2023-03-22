import React from "react";
import { NavLink } from "react-router-dom";
import { ProfileInfoData } from "..";
import { UserDetails } from "../UserDetails";
import userImg from "./../../../assets/avatar.png";
import styles from "./style.module.css";

export const ProfileInfo: React.FC<ProfileInfoData> = (props) => {
  const { profileData, ownProfile, saveProfilePhotoThunk } = props;
  const { photos, fullName } = profileData;

  const changePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target.files) target.files[0] && saveProfilePhotoThunk(target.files[0]);
  };

  return (
    <>
      <div className={styles["profile-bg"]} />
      <div className={styles["user-info"]}>
        <div>
          <img
            src={photos.small ? photos.small : userImg}
            alt={fullName + "avatar"}
          />
          {/* {ownProfile && <input type="file" onChange={changePhoto} />} */}
        </div>
        <NavLink className={styles["edit-data-btn"]} to="/settings">
          Edit profile
        </NavLink>
        <UserDetails {...props} />
      </div>
    </>
  );
};
