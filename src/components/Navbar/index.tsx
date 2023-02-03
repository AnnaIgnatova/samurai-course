import { Link } from "react-router-dom";
import { NavbarData } from "../../interfaces";
import styles from "./style.module.css";

export const Navbar: React.FC<NavbarData> = ({ friendsIds }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
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
          {friendsIds.map((friend: any) => (
            <img
              key={friend}
              src={`../../assets/friends/friend-${friend}.png`}
              alt="friend"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
