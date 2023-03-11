import React from "react";
import { ProfileInfoFormContainer } from "../Profile/ProfileInfoForm";
import { UserDetails } from "../Profile/UserDetails";

import styles from "./style.module.css";

export const Settings: React.FC<any> = (props) => {
  const { saveProfileInfoThunk, profileData } = props;
  const [isEditMode, setEditMode] = React.useState(false);

  const modeOffEditMode = (values: any) => {
    saveProfileInfoThunk(values).then((res: any) => !res && setEditMode(false));
  };

  return (
    <div className={styles.container}>
      {!isEditMode ? (
        <>
          <UserDetails {...props} toggleEditMode={() => setEditMode(true)} />
          <button onClick={() => setEditMode(true)}>edit data</button>
        </>
      ) : (
        <ProfileInfoFormContainer
          profile={profileData}
          toggleEditMode={modeOffEditMode}
        />
      )}
    </div>
  );
};
