import { Link } from "react-router-dom";
import { NavbarData } from "../../interfaces";
import styles from "./style.module.css";
import homeIcon from "./../../assets/navbar/profile.svg";
import usersIcon from "./../../assets/navbar/users.svg";
import dialogsIcon from "./../../assets/navbar/messages.svg";
import newsIcon from "./../../assets/navbar/news.svg";
import settingsIcon from "./../../assets/navbar/settings.svg";
import musicIcon from "./../../assets/navbar/music.svg";

export const Navbar: React.FC<NavbarData> = ({ friendsIds }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <img src={homeIcon} alt="profile-icon" />
          <Link to="/profile/27789">Profile</Link>
        </li>
        <li>
          <img src={usersIcon} alt="users-icon" />
          <Link to="/users">Users</Link>
        </li>
        <li>
          <img src={dialogsIcon} alt="dialogs-icon" />
          <Link to="/dialogs">Messages</Link>
        </li>
        <li>
          <img src={newsIcon} alt="news-icon" />
          <Link to="/news">News</Link>
        </li>
        <li>
          <img src={musicIcon} alt="music-icon" />
          <Link to="/music">Music</Link>
        </li>
        <li>
          <img src={settingsIcon} alt="settings-icon" />
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      <div className={styles["friends-container"]}>
        <span>Friends</span>
        <div className={styles.friends}>
          {friendsIds.map((friend: any) => (
            <img
              key={friend}
              src={`${process.env.PUBLIC_URL}/assets/friends/friend-${friend}.png`}
              alt="friend"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
