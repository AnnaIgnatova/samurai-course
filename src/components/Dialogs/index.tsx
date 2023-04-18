import { Button, Form, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { DialogsPageData } from "../../interfaces";
import { Dialog } from "./Dialog";
import { Message } from "./Message";
import styles from "./style.module.css";

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
  const bottomRef = useRef(null);
  const { dialogs } = dialogsPage;
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);
  const [wsChannelStatus, setWsChannelStatus] = useState<"ready" | "pending">(
    "pending"
  );
  const [messages, setMessages] = useState<MessageData[]>([]);

  const createNewMessage = (message: string) => {
    wsChannel?.send(message);
  };

  const createChannel = () => {
    setWsChannel(
      new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      )
    );
  };

  const openChannel = () => {
    setWsChannelStatus("ready");
  };

  const closeChannel = () => {
    setMessages([]);
    wsChannel?.close();
    setWsChannelStatus("pending");
  };

  useEffect(() => {
    closeChannel();
    createChannel();
  }, []);

  useEffect(() => {
    wsChannel?.addEventListener("open", openChannel);
    return () => {
      wsChannel?.removeEventListener("open", openChannel);
      closeChannel();
    };
  }, [wsChannel]);

  useEffect(() => {
    const handleMessage = (e) => {
      setMessages((prevState) => [...prevState, ...JSON.parse(e.data)]);
    };
    wsChannel?.addEventListener("message", handleMessage);

    return () => {
      wsChannel?.removeEventListener("message", handleMessage);
    };
  }, [wsChannel]);

  useEffect(() => {
    bottomRef?.current &&
      bottomRef?.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {wsChannelStatus === "ready" ? (
        <div className={styles.container}>
          <div className={styles["messages"]}>
            {messages.map((data) => (
              <Message {...data} />
            ))}
          </div>
          <div ref={bottomRef} />
          <MessageForm handleSubmit={createNewMessage} />
        </div>
      ) : (
        <Spin size="large" />
      )}
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
