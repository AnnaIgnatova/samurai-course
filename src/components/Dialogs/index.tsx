import React from "react";
import { DialogsPageData } from "../../interfaces";
import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

export const Dialogs: React.FC<DialogsPageData> = ({ state, sendMessage }) => {
  const { dialogs, messages } = state;
  const messageRef = React.useRef<HTMLTextAreaElement>(null);

  const createMessage = () => {
    if (messageRef.current) {
      const text = messageRef.current.value;
      messageRef.current.value = "";
      sendMessage(text);
    }
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
        <textarea ref={messageRef}></textarea>
        <button onClick={createMessage}>Send</button>
      </div>
    </div>
  );
};
