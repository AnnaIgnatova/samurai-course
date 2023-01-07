import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

export const Dialogs = () => {
  const dialogsData = [
    {
      id: 1,
      name: "Anna",
    },
    {
      id: 2,
      name: "Sasha",
    },
    {
      id: 3,
      name: "Olya",
    },
    {
      id: 4,
      name: "Misha",
    },
    {
      id: 5,
      name: "Dima",
    },
  ];

  const messagesData = [
    {
      id: 1,
      text: "Hi",
    },
    {
      id: 2,
      text: "Good morning",
    },
    {
      id: 3,
      text: "How are you",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles["dialogs-items"]}>
        {dialogsData.map(({ id, name }) => (
          <Dialog id={id} name={name} />
        ))}
      </div>
      <div className={styles["messages"]}>
        {messagesData.map(({ text }) => (
          <Message text={text} />
        ))}
      </div>
    </div>
  );
};
