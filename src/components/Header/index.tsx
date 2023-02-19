import styles from "./style.module.css";
import iconUrl from "./../../assets/network-icon.png";
import { NavLink } from "react-router-dom";

export const Header: React.FC<any> = ({ isAuth, email, handleLogout }) => {
  console.log(isAuth);
  return (
    <header className={styles.header}>
      <img src={iconUrl} alt="network icon" />
      {isAuth ? (
        <div>
          <span>{email}</span>
          <button className={styles["login-btn"]} onClick={handleLogout}>
            Log out
          </button>
        </div>
      ) : (
        <NavLink className={styles["login-btn"]} to="/login">
          Login
        </NavLink>
      )}
    </header>
  );
};
