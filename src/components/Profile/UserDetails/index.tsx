import React from "react";
import { NavLink } from "react-router-dom";
import { Dispatch } from "redux";
import { ProfileComponentType } from "../../../containers/ProfileContainer";
import { ProfileAPIData, ProfileUserData } from "../../../interfaces";
import { ProfileReducerPayloadType } from "../../../redux/reducers/ProfileReducer";
import { Status } from "../Status";
import styles from "./style.module.css";

export interface UserDetailsData {
  status: string | null;
  updateStatusDataThunk: (
    text: string
  ) => (dispatch: Dispatch<ProfileReducerPayloadType>) => void;
  profileData: ProfileUserData;
}

export const UserDetails: React.FC<ProfileComponentType> = ({
  status,
  updateStatusDataThunk,
  profileData,
}) => {
  const {
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    contacts,
    aboutMe,
  } = profileData;
  return (
    <div className={styles["details-container"]}>
      <span className={styles["user-name"]}>{fullName}</span>
      <Status text={status} updateStatus={updateStatusDataThunk} />
      <span className={styles["user-details"]}>{aboutMe}</span>
      <span className={styles["user-details"]}>
        looking for a job: {lookingForAJob ? "yes" : "no"}
      </span>
      <span className={styles["user-details"]}>
        {lookingForAJobDescription}
      </span>
      {Object.entries(contacts).map(([key, value]) => (
        <>
          {value && (
            <span className={styles["user-link"]}>
              {key}: {value}
            </span>
          )}
        </>
      ))}
    </div>
  );
};
