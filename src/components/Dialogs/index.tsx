import { DialogsData } from "../../interfaces";
import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

export const Dialogs: React.FC<DialogsData> = ({ dialogs, messages }) => {
  return (
    <div className={styles.container}>
      <div className={styles["dialogs-items"]}>
        {dialogs.map(({ id, name }) => (
          <Dialog id={id} name={name} />
        ))}
      </div>
      <div className={styles["messages"]}>
        {messages.map(({ text }) => (
          <Message text={text} />
        ))}
      </div>
    </div>
  );
};
