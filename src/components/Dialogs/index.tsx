import { Button, Form, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogsPageData, StateData } from "../../interfaces";
import {
  sendMessageThunkCreator,
  startMessagesListening,
  stopMessagesListening,
} from "../../redux/reducers/ChatReducer";
import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

export interface MessageData {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

export const Dialogs: React.FC<DialogsPageData> = () => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const messages = useSelector((state: StateData) => state.chat.messages);
  // const [messages, setMessages] = useState<MessageData[]>([]);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  }, []);

  useEffect(() => {
    bottomRef?.current &&
      bottomRef?.current.scrollIntoView({
        behavior: "smooth",
      });
  }, [messages]);

  const sendMessage = (message: string) => {
    dispatch(sendMessageThunkCreator(message));
  };

  return (
    <>
      {/* {wsChannelStatus === "ready" ? ( */}
      <div className={styles.container}>
        <div className={styles["messages"]}>
          {messages.map((data) => (
            <Message {...data} />
          ))}
          <div ref={bottomRef} />
        </div>

        <MessageForm handleSubmit={sendMessage} />
      </div>
      {/* ) : (
        <Spin size="large" />
      )} */}
    </>
  );
};

const MessageForm: React.FC<any> = ({ handleSubmit }) => {
  const [form] = Form.useForm();
  const onFinish = ({ message }: any) => {
    handleSubmit(message);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      style={{ maxWidth: "800px", display: "flex", alignItems: "end" }}
      wrapperCol={{ span: 20 }}
      initialValues={{
        message: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item name="message" style={{ flex: 1 }}>
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};
