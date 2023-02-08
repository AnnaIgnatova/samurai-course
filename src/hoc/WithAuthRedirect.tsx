import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { StateData } from "../interfaces";

const mapStateToProps = (state: StateData) => ({
  isAuth: state.header.isAuth,
});

export const WithAuthRedirect = (Component: any) => {
  const RedirectComponent: React.FC = (props: any) => {
    return props.isAuth ? <Component {...props} /> : <Navigate to="/login" />;
  };

  return connect(mapStateToProps)(RedirectComponent);
};
