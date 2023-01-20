import React from "react";
import { Dialogs } from "../../components/Dialogs";
import { StoreContext } from "../../context";
import { StoreData } from "../../interfaces";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/reducers/DialogsReducer";

export const DialogsContainer: React.FC = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage;
        const { dispatch } = store;

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
      }}
    </StoreContext.Consumer>
  );
};
