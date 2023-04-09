import { Button } from "antd";
import React from "react";
import { ProfileInfoForm } from "../Profile/ProfileInfoForm";
import { UserDetails } from "../Profile/UserDetails";

import styles from "./style.module.css";

export const Settings: React.FC<any> = (props) => {
  const { saveProfileInfoThunk, profileData } = props;
  const [isEditMode, setEditMode] = React.useState(false);

  const modeOffEditMode = async (values: any) => {
    const res = await saveProfileInfoThunk(values);
    !res && setEditMode(false);
  };

  return (
    <div className={styles.container}>
      {!isEditMode ? (
        <>
          <UserDetails {...props} />
          <Button size="large" onClick={() => setEditMode(true)}>
            Edit profile
          </Button>
        </>
      ) : (
        <ProfileInfoForm
          profile={profileData}
          toggleEditMode={modeOffEditMode}
        />
      )}
    </div>
  );
};
