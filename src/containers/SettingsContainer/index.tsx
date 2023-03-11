import { connect } from "react-redux";
import { StateData } from "../../interfaces";
import React from "react";
import {
  getUserDataThunk,
  saveProfileInfoThunk,
} from "../../redux/reducers/ProfileReducer";
import { Loader } from "../../components/UI/Loader";
import { compose } from "redux";
import { Settings } from "../../components/Settings";

const SettingsContainer: React.FC<any> = (props) => {
  return <>{props.profileData ? <Settings {...props} /> : <Loader />}</>;
};

const mapStateToProps = (state: StateData) => ({
  profileData: state.profilePage.profileData,
});

export default compose(
  connect(mapStateToProps, {
    getUserDataThunk,
    saveProfileInfoThunk,
  })
)(SettingsContainer);
