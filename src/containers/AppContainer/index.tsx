import React from "react";
import { connect } from "react-redux";
import { Action, compose } from "redux";
import { ThunkAction } from "redux-thunk";
import App from "../../App";
import { Loader } from "../../components/UI/Loader";
import { StateData } from "../../interfaces";
import { AppState } from "../../redux";
import { initializeAppThunk } from "../../redux/reducers/AppReducer";

export type MapStateType = ReturnType<typeof mapStateToProps>;
export type DispatchStateType = {
  initializeAppThunk: () => ThunkAction<
    Promise<void>,
    AppState,
    unknown,
    Action<string>
  >;
};

class AppAPIContainer extends React.Component<
  MapStateType & DispatchStateType
> {
  componentDidMount(): void {
    this.props.initializeAppThunk();
  }
  render() {
    if (!this.props.isInitialized) return <Loader />;
    return <App />;
  }
}

const mapStateToProps = (state: StateData) => ({
  isInitialized: state.app.isInitialized,
  isAuth: state.header.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    initializeAppThunk,
  })
)(AppAPIContainer);
