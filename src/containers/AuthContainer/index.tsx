import React from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import { StateData } from "../../interfaces";
import { logoutUserThunk } from "../../redux/reducers/AuthReducer";
import { useNavigate } from "react-router-dom";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../../redux";
import { Action, compose } from "redux";

export type MapStateType = ReturnType<typeof mapStateToProps>;
export type DispatchStateType = {
  logoutUserThunk: () => ThunkAction<
    Promise<void>,
    AppState,
    unknown,
    Action<string>
  >;
};

const AuthAPIContainer: React.FC<MapStateType & DispatchStateType> = (
  props
) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.logoutUserThunk();
    navigate("/login");
  };

  return <Header {...props} handleLogout={handleLogout} />;
};

const mapStateToProps = (state: StateData) => ({
  id: state.header.id,
  login: state.header.login,
  email: state.header.email,
  isAuth: state.header.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    logoutUserThunk,
  })
)(AuthAPIContainer);
