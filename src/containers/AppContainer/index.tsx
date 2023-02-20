import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import App from "../../App";
import { Loader } from "../../components/Loader";
import { StateData } from "../../interfaces";
import { initializeAppThunk } from "../../redux/reducers/AppReducer";

class AppAPIContainer extends React.Component<any> {
  componentDidMount(): void {
    this.props.initializeAppThunk();
  }
  render() {
    if (!this.props.isInitialized) return <Loader />;
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state: StateData) => ({
  isInitialized: state.app.isInitialized,
  isAuth: state.header.isAuth
});

export default compose(
  connect(mapStateToProps, {
    initializeAppThunk,
  })
)(AppAPIContainer);
