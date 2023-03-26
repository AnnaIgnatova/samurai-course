import { connect } from "react-redux";
import { compose } from "redux";
import { Login } from "../../components/Login";
import { StateData } from "../../interfaces";
import {
  getCaptchaThunk,
  loginUserThunk,
} from "../../redux/reducers/AuthReducer";

const mapStateToProps = (state: StateData) => ({
  isAuth: state.header.isAuth,
  captcha: state.header.captcha,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    loginUserThunk,
    getCaptchaThunk,
  })
)(Login);
