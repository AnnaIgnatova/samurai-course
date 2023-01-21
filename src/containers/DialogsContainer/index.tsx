import { Dialogs } from "../../components/Dialogs";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/reducers/DialogsReducer";
import { connect } from "react-redux";
import { StateData } from "../../interfaces";

const mapStateToProps = (state: StateData) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch: any) => ({
  createMessage: () => dispatch(sendMessageActionCreator()),
  handleChange: (text: string) =>
    dispatch(updateMessageTextActionCreator(text)),
});

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
