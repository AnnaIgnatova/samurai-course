import { Dialogs } from "../../components/Dialogs";
import { connect } from "react-redux";
import { StateData } from "../../interfaces";
import {
  sendMessage,
  updateMessageText,
} from "../../redux/reducers/DialogsReducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

const mapStateToProps = (state: StateData) => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.header.isAuth
});

const AuthRedirectComponent = WithAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateMessageText,
})(AuthRedirectComponent);
