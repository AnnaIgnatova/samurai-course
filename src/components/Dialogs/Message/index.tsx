import { Avatar } from 'antd';
import { MessageData } from '..';
import styles from './style.module.css';

export const Message: React.FC<MessageData> = ({
  message,
  photo,
  userName,
  userId,
}) => {
  return (
    <p className={styles[`from-${userId === 27789 ? 'me' : 'them'}`]}>
      {photo ? <Avatar src={photo} /> : <Avatar />}
      <span>{userName}</span>
      <span>{message}</span>
    </p>
  );
};
