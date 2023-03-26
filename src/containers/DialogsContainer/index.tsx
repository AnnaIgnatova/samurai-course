import { Dialogs } from "../../components/Dialogs";
import { connect } from "react-redux";
import { StateData } from "../../interfaces";
import { DialogsActionCreators } from "../../redux/reducers/DialogsReducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state: StateData) => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.header.isAuth,
});

export default compose<React.ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, {
    ...DialogsActionCreators,
  })
)(Dialogs);
