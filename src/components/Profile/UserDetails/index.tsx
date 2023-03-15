import React from "react";
import { ProfileAPIData, ProfileUserData } from "../../../interfaces";
import { Status } from "../Status";
import styles from "./style.module.css";

export interface UserDetailsData {
  status: string;
  updateStatusDataThunk: any;
  profileData: ProfileUserData;
}

export const UserDetails: React.FC<UserDetailsData> = ({
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
      <Status text={status} updateStatus={updateStatusDataThunk} />
      <span className={styles["user-details"]}>name: {fullName}</span>
      <span className={styles["user-details"]}>about me: {aboutMe}</span>
      <span className={styles["user-details"]}>
        looking for a job: {lookingForAJob ? "yes" : "no"}
      </span>
      <span className={styles["user-details"]}>
        looking for a job description: {lookingForAJobDescription}
      </span>
      {Object.entries(contacts).map(([key, value]) => (
        <>
          {value && (
            <span className={styles["user-details"]}>
              {key}: {value}
            </span>
          )}
        </>
      ))}
    </div>
  );
};
