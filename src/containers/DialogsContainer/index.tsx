import React from "react";
import { Dialogs } from "../../components/Dialogs";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/reducers/DialogsReducer";

export const DialogsContainer: React.FC<any> = ({ store }) => {
  const {  dispatch } = store;
  const state = store.getState().dialogsPage;

  const createMessage = () => {
    dispatch(sendMessageActionCreator());
  };

  const handleChange = (text: string) => {
    dispatch(updateMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      createMessage={createMessage}
      handleChange={handleChange}
      dialogsPage={state}
    />
  );
};
