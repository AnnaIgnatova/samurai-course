import { connect } from "react-redux";
import { ProfileUserData, StateData } from "../../interfaces";
import React from "react";
import {
  getUserDataThunk,
  ProfileReducerPayloadType,
  saveProfileInfoThunk,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/UI/Loader";
import { Settings } from "../../components/Settings";
import { Dispatch } from "redux";

export type SettingsContainerType = {
  profileData: ProfileUserData;
  getUserDataThunk: (
    userId: string
  ) => (dispatch: Dispatch<ProfileReducerPayloadType>) => void;
  saveProfileInfoThunk: any;
};

const SettingsContainer: React.FC<SettingsContainerType> = (props) => {
  return <>{props.profileData ? <Settings {...props} /> : <Loader />}</>;
};

const mapStateToProps = (state: StateData) => ({
  profileData: state.profilePage.profileData,
});

export default connect(mapStateToProps, {
  getUserDataThunk,
  saveProfileInfoThunk,
})(SettingsContainer);
