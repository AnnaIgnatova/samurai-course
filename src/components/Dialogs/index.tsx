import React from "react";
import { DialogsPageData } from "../../interfaces";
import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/reducers/DialogsReducer";
import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

export const Dialogs: React.FC<DialogsPageData> = ({ state, dispatch }) => {
  const { dialogs, messages, newMessage } = state;

  const createMessage = () => {
    dispatch(sendMessageActionCreator());
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    dispatch(updateMessageTextActionCreator(text));
  };

  return (
    <div className={styles.container}>
      <div className={styles["dialogs-items"]}>
        {dialogs.map(({ id, name }) => (
          <Dialog id={id} name={name} />
        ))}
      </div>
      <div className={styles["messages"]}>
        {messages.map(({ text, from }) => (
          <Message text={text} from={from} />
        ))}
        <textarea onChange={handleChange} value={newMessage} />
        <button onClick={createMessage}>Send</button>
      </div>
    </div>
  );
};
