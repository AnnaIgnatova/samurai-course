import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { DialogsPageData } from "../../interfaces";
import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

const wsChannel = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

export const Dialogs: React.FC<DialogsPageData> = ({
  dialogsPage,
  sendMessage,
}) => {
  const { dialogs } = dialogsPage;
  const [messages, setMessages] = useState([]);

  const createNewMessage = (message: string) => {
    sendMessage(message);
  };

  useEffect(() => {
    wsChannel.addEventListener("message", (e) => {
      setMessages((prevState) => [...prevState, ...JSON.parse(e.data)]);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles["dialogs-items"]}>
          {dialogs.map(({ id, name }) => (
            <Dialog key={id} id={id} name={name} />
          ))}
        </div> */}
        <div className={styles["messages"]}>
          {messages.map(({ message }) => (
            <Message text={message} />
          ))}
          <MessageForm handleSubmit={createNewMessage} />
        </div>
      </div>
    </>
  );
};

const MessageForm: React.FC<any> = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        message: "",
      }}
      onSubmit={(values) => {
        handleSubmit(values.message);
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Type something here"
            onChange={handleChange}
            value={values.message}
            className={styles["form-input"]}
          />
          <button type="submit" disabled={isSubmitting}>
            Send
          </button>
        </form>
      )}
    </Formik>
  );
};
