import React from "react";
import { connect } from "react-redux";
import { Header } from "../../components/Header";
import { HeaderContainerData, StateData } from "../../interfaces";
import { authUserThunk } from "../../redux/reducers/AuthReducer";

class AuthAPIContainer extends React.Component<HeaderContainerData> {
  componentDidMount(): void {
    this.props.authUserThunk();
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

export const AuthContainer = connect(mapStateToProps, { authUserThunk })(
  AuthAPIContainer
);
