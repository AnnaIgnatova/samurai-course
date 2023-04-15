import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { DialogsPageData } from '../../interfaces';
import { Dialog } from './Dialog';
import { Message } from './Message';
import styles from './style.module.css';

export interface MessageData {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

export const Dialogs: React.FC<DialogsPageData> = ({
  dialogsPage,
  sendMessage,
}) => {
  const { dialogs } = dialogsPage;
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);
  const [wsChannelStatus, setWsChannelStatus] = useState<'ready' | 'pending'>(
    'pending'
  );
  const [messages, setMessages] = useState<MessageData[]>([]);

  const createNewMessage = (message: string) => {
    sendMessage(message);
  };

  const createChannel = () => {
    setWsChannel(
      new WebSocket(
        'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
      )
    );
  };

  useEffect(() => {
    setMessages([]);
    createChannel();

    wsChannel?.addEventListener('open', () => {
      setWsChannelStatus('ready');
    });
    return () => {
      
    }
  }, []);

  useEffect(() => {
    const handleMessage = (e) => {
      setMessages((prevState) => [...prevState, ...JSON.parse(e.data)]);
    };
    wsChannel?.addEventListener('message', handleMessage);

    return () => {
      wsChannel?.removeEventListener('message', handleMessage);
    };
  }, [wsChannel]);

  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles["dialogs-items"]}>
          {dialogs.map(({ id, name }) => (
            <Dialog key={id} id={id} name={name} />
          ))}
        </div> */}
        <div className={styles['messages']}>
          {messages.map((data) => (
            <Message {...data} />
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
        message: '',
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
            className={styles['form-input']}
          />
          <button type="submit" disabled={isSubmitting}>
            Send
          </button>
        </form>
      )}
    </Formik>
  );
};
