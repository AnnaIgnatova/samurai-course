import { useSelector } from "react-redux";
import { StateData } from "../../interfaces";
import React from "react";
import {
  getUserDataThunk,
  saveProfileInfoThunk,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/UI/Loader";
import { Settings } from "../../components/Settings";

const SettingsContainer: React.FC = () => {
  const profileData = useSelector(
    (state: StateData) => state.profilePage.profileData
  );
  return (
    <>
      {profileData ? (
        <Settings
          profileData={profileData}
          getUserDataThunk={getUserDataThunk}
          saveProfileInfoThunk={saveProfileInfoThunk}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SettingsContainer;
