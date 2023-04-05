import { Dialogs } from "../../components/Dialogs";
import { useSelector } from "react-redux";
import { StateData } from "../../interfaces";
import { DialogsActionCreators } from "../../redux/reducers/DialogsReducer";

const DialogsContainer = () => {
  const dialogsPage = useSelector((state: StateData) => state.dialogsPage);
  return (
    <Dialogs
      dialogsPage={dialogsPage}
      sendMessage={DialogsActionCreators.sendMessage}
    />
  );
};

export default DialogsContainer;
