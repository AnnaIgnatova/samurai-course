import React from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import { StateData } from "../../interfaces";
import { logoutUserThunk } from "../../redux/reducers/AuthReducer";
import { useNavigate } from "react-router-dom";

const AuthAPIContainer: React.FC<any> = (props) => {
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

export const AuthContainer = connect(mapStateToProps, {
  logoutUserThunk,
})(AuthAPIContainer);
