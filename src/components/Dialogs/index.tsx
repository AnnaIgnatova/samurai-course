import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

export const Dialogs = () => {
  return (
    <div className={styles.container}>
      <div className={styles["dialogs-items"]}>
        <Dialog id={1} name="Anna" />
        <Dialog id={2} name="Sasha" />
        <Dialog id={3} name="Olya" />
        <Dialog id={4} name="Misha" />
        <Dialog id={5} name="Dima" />
      </div>
      <div className={styles["messages"]}>
        <Message text="Hi" />
        <Message text="Good morning" />
        <Message text="How are you" />
      </div>
    </div>
  );
};
