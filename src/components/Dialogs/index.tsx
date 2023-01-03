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
        <Dialog id={dialogsData[0].id} name={dialogsData[0].name} />
        <Dialog id={dialogsData[1].id} name={dialogsData[1].name} />
        <Dialog id={dialogsData[2].id} name={dialogsData[2].name} />
        <Dialog id={dialogsData[3].id} name={dialogsData[3].name} />
        <Dialog id={dialogsData[4].id} name={dialogsData[4].name} />
      </div>
      <div className={styles["messages"]}>
        <Message text={messagesData[0].text} />
        <Message text={messagesData[1].text} />
        <Message text={messagesData[2].text} />
      </div>
    </div>
  );
};
