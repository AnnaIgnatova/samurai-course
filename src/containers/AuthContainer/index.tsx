import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import { HeaderContainerData, StateData } from "../../interfaces";
import { authUser } from "../../redux/reducers/AuthReducer";

class AuthAPIContainer extends React.Component<HeaderContainerData> {
  componentDidMount(): void {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then(({ data }) => {
        if (!data.resultCode) this.props.authUser({...data.data, isAuth: true});
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: StateData) => ({
  id: state.header.id,
  login: state.header.login,
  email: state.header.email,
  isAuth: state.header.isAuth,
});

export const AuthContainer = connect(mapStateToProps, { authUser })(
  AuthAPIContainer
);
