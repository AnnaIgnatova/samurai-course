import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ProfileUserData } from "../../../interfaces/profile";
import { saveProfilePhotoThunk } from "../../../redux/reducers/ProfileReducer";
import { UserDetails } from "../UserDetails";
import userImg from "./../../../assets/avatar.png";
import styles from "./style.module.css";

export interface ProfileInfoProps {
  profileData: ProfileUserData;
  ownProfile: boolean;
  status: string | null;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
  const { profileData, ownProfile, status } = props;
  const { photos, fullName } = profileData;

  const dispatch: any = useDispatch();

  const changePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target.files)
      target.files[0] && dispatch(saveProfilePhotoThunk(target.files[0]));
  };

  return (
    <>
      <div className={styles["profile-bg"]} />
      <div className={styles["user-info"]}>
        <div>
          {photos && (
            <img
              src={photos.small ? photos.small : userImg}
              alt={fullName + "avatar"}
            />
          )}
          {ownProfile && <input type="file" onChange={changePhoto} />}
        </div>

        <NavLink to="/settings">
          <Button size="large">Edit profile</Button>
        </NavLink>
        <UserDetails status={status} profileData={profileData} />
      </div>
    </>
  );
};
