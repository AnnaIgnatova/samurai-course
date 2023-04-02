import React from "react";
import { ProfileUserData } from "../../../interfaces/profile";
import { Status } from "../Status";
import styles from "./style.module.css";

export interface UserDetailsProps {
  status?: string | null;
  profileData: ProfileUserData;
}

export const UserDetails: React.FC<UserDetailsProps> = ({
  status,
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
      <Status text={status} />
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
