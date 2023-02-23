import { Link, useLocation } from "react-router-dom";
import { NavbarData } from "../../interfaces";
import { navbarRoutes } from "./constants";
import styles from "./style.module.css";

export const Navbar: React.FC<NavbarData> = ({ friendsIds }) => {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      <ul>
        {navbarRoutes.map(({ name, imgUrl, path }) => (
          <li
            key={name}
            className={
              pathname === path ? styles["active-route"] : styles.route
            }
          >
            <img src={imgUrl} alt={`${name.toLowerCase()}-icon`} />
            <Link to={path}>{name}</Link>
          </li>
        ))}
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
