import styles from "./style.module.css";

export interface MessageData {
  text: string;
}

export const Message: React.FC<MessageData> = ({ text }) => {
  return <div className={styles.message}>{text}</div>;
};
