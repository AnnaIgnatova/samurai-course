import { connect } from "react-redux";
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

export const LoginContainer = connect(mapStateToProps, {
  loginUserThunk,
  getCaptchaThunk,
})(Login);
