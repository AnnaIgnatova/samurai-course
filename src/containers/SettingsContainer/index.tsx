import { connect } from "react-redux";
import { ProfileUserData, StateData } from "../../interfaces";
import React from "react";
import {
  getUserDataThunk,
  saveProfileInfoThunk,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/UI/Loader";
import { Settings } from "../../components/Settings";
import { Action, compose } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../../redux";

export type SettingsContainerType = {
  profileData: ProfileUserData;
  getUserDataThunk: (
    userId: string
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
  saveProfileInfoThunk: (
    info: ProfileUserData
  ) => ThunkAction<Promise<void>, AppState, unknown, Action<string>>;
};

const SettingsContainer: React.FC<SettingsContainerType> = (props) => {
  return <>{props.profileData ? <Settings {...props} /> : <Loader />}</>;
};

const mapStateToProps = (state: StateData) => ({
  profileData: state.profilePage.profileData,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserDataThunk,
    saveProfileInfoThunk,
  })
)(SettingsContainer);
