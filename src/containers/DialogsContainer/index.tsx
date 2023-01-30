import { Dialogs } from "../../components/Dialogs";
import { connect } from "react-redux";
import { StateData } from "../../interfaces";
import {
  sendMessage,
  updateMessageText,
} from "../../redux/reducers/DialogsReducer";

const mapStateToProps = (state: StateData) => ({
  dialogsPage: state.dialogsPage,
});

export const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateMessageText,
})(Dialogs);
