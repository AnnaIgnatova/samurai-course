import React from "react";
import { ProfileAPIData } from "../../../interfaces";
import { Status } from "../Status";
import styles from "./style.module.css";

export const UserDetails: React.FC<ProfileAPIData> = ({
  status,
  updateStatusDataThunk,
  profileData,
}) => {
  const { lookingForAJob, lookingForAJobDescription, fullName, contacts } =
    profileData;
  return (
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
      <span className={styles["user-details"]}>inst: {contacts.instagram}</span>
      <span className={styles["user-details"]}>yt: {contacts.youtube}</span>
      <button>edit data</button>
    </div>
  );
};
