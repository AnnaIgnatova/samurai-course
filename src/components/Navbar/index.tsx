import { Link } from "react-router-dom";
import { StoreContext } from "../../context";
import styles from "./style.module.css";

export const Navbar: React.FC = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const friendsIds = store.getState().navbar.friendsIds;
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
                {friendsIds.map((friend: any) => (
                  <img
                    src={`./assets/friends/friend-${friend}.png`}
                    alt="friend"
                  />
                ))}
              </div>
            </div>
          </nav>
        );
      }}
    </StoreContext.Consumer>
  );
};
