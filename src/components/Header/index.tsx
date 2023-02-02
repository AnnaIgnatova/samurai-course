import { HeaderContainerData } from "../../interfaces";
import styles from "./style.module.css";

export const Header: React.FC<HeaderContainerData> = ({ isAuth, email }) => {
  return (
    <header className={styles.header}>
      <img src="./assets/network-icon.png" alt="network icon" />
      {isAuth ? <span>{email}</span> : <button>Login</button>}
    </header>
  );
};
