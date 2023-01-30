import React from "react";
import { DialogsPageData } from "../../interfaces";
import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

export const Dialogs: React.FC<DialogsPageData> = ({
  dialogsPage,
  sendMessage,
  updateMessageText,
}) => {
  const { dialogs, messages, newMessage } = dialogsPage;

  const createNewMessage = () => {
    sendMessage();
  };

  const changeMessageText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    updateMessageText(text);
  };

  return (
    <div className={styles.container}>
      <div className={styles["dialogs-items"]}>
        {dialogs.map(({ id, name }) => (
          <Dialog key={id} id={id} name={name} />
        ))}
      </div>
      <div className={styles["messages"]}>
        {messages.map(({ id, text, from }) => (
          <Message key={id} text={text} from={from} />
        ))}
        <textarea
          onChange={changeMessageText}
          value={newMessage}
          placeholder="Type something here"
        />
        <button onClick={createNewMessage}>Send</button>
      </div>
    </div>
  );
};
