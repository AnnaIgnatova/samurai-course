import styles from "./style.module.css";
import iconUrl from "./../../assets/network-icon.png";
import { NavLink } from "react-router-dom";
import { FilledButton } from "../UI/Button";

export const Header: React.FC<any> = ({ isAuth, email, handleLogout }) => {
  return (
    <header className={styles.header}>
      <img src={iconUrl} alt="network icon" />
      {isAuth ? (
        <div>
          <span>{email}</span>
          <FilledButton onClick={handleLogout} text="Log out" />
        </div>
      ) : (
        <NavLink className={styles["login-btn"]} to="/login">
          Login
        </NavLink>
      )}
    </header>
  );
};
