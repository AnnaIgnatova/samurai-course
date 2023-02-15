import React from "react";
import { Field, reduxForm } from "redux-form";
import { DialogsPageData } from "../../interfaces";
import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

export const Dialogs: React.FC<DialogsPageData> = ({
  dialogsPage,
  sendMessage,
}) => {
  const { dialogs, messages } = dialogsPage;

  const createNewMessage = (data: any) => {
    sendMessage(data.message);
  };

  return (
    <>
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
          <MessageReduxForm onSubmit={createNewMessage} />
        </div>
      </div>
    </>
  );
};

const MessageForm: React.FC<any> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="text"
        component="textarea"
        name="message"
        placeholder="Type something here"
      />
      <button>Send</button>
    </form>
  );
};

const MessageReduxForm = reduxForm({ form: "message" })(MessageForm);
