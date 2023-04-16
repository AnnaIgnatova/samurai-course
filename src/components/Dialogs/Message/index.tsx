import { Avatar } from "antd";
import { MessageData } from "..";
import styles from "./style.module.css";
import { UserOutlined } from "@ant-design/icons";

export const Message: React.FC<MessageData> = ({
  message,
  photo,
  userName,
  userId,
}) => {
  return (
    <p className={styles[`from-${userId === 27789 ? "me" : "them"}`]}>
      {photo ? <Avatar src={photo} /> : <Avatar icon={<UserOutlined />} />}
      <span className={styles.name}>{userName}</span>
      <span className={styles.message}>{message}</span>
    </p>
  );
};
