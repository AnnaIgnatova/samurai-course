import { Dialogs } from "../../components/Dialogs";
import { connect } from "react-redux";
import { StateData } from "../../interfaces";
import {
  sendMessage,
  updateMessageText,
} from "../../redux/reducers/DialogsReducer";

const mapStateToProps = (state: StateData) => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.header.isAuth
});

export const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateMessageText,
})(Dialogs);
