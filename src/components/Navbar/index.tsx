import { Link } from "react-router-dom";
import { friendsIds } from "./constants";
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
      <div className={styles["friends-container"]}>
        <span>Friends</span>
        <div className={styles.friends}>
          {friendsIds.map((friend) => (
            <img src={`./assets/friends/friend-${friend}.png`} alt="friend" />
          ))}
        </div>
      </div>
    </nav>
  );
};
