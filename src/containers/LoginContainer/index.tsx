import { connect } from "react-redux";
import { Login } from "../../components/Login";
import { StateData } from "../../interfaces";
import { loginUserThunk } from "../../redux/reducers/AuthReducer";

const mapStateToProps = (state: StateData) => ({
  isAuth: state.header.isAuth,
});

export const LoginContainer = connect(mapStateToProps, {
  loginUserThunk,
})(Login);
