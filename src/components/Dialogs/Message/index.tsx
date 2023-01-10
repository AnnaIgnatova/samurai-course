import styles from "./style.module.css";

export interface MessageData {
  text: string;
  from: string;
}

export const Message: React.FC<MessageData> = ({ text, from }) => {
  return <p className={styles[`from-${from}`]}>{text}</p>;
};
