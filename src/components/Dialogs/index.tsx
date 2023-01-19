import React from "react";
import { DialogsPageData } from "../../interfaces";
import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

export const Dialogs: React.FC<DialogsPageData> = ({
  dialogsPage,
  createMessage,
  handleChange,
}) => {
  const { dialogs, messages, newMessage } = dialogsPage;

  const createNewMessage = () => {
    createMessage();
  };

  const changeMessageText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    handleChange(text);
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
        <textarea onChange={changeMessageText} value={newMessage} />
        <button onClick={createNewMessage}>Send</button>
      </div>
    </div>
  );
};
