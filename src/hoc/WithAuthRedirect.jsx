import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { StateData } from "../interfaces";

const mapStateToProps = (state) => ({
  isAuth: state.header.isAuth,
});

export const WithAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    return props.isAuth ? <Component {...props} /> : <Navigate to="/login" />;
  };

  return connect(mapStateToProps)(RedirectComponent);
};
