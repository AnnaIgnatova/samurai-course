import { Link } from "react-router-dom";
import styles from "./style.module.css";

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dialogs">Messages</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};
