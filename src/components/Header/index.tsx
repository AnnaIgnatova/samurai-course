import { HeaderContainerData } from "../../interfaces";
import styles from "./style.module.css";
import iconUrl from "./../../assets/network-icon.png";

export const Header: React.FC<HeaderContainerData> = ({ isAuth, email }) => {
  return (
    <header className={styles.header}>
      <img src={iconUrl} alt="network icon" />
      {isAuth ? (
        <span>{email}</span>
      ) : (
        <button className={styles["login-btn"]}>Login</button>
      )}
    </header>
  );
};
