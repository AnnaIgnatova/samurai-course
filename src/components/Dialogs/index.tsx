import { Link } from "react-router-dom";
import styles from "./style.module.css";

export const Dialogs = () => {
  return (
    <div className={styles.container}>
      <div className={styles["dialogs-items"]}>
        <div className={styles.dialog}>
          <Link to="/dialogs/1">Anna</Link>
        </div>
        <div className={styles.dialog}>
          <Link to="/dialogs/2">Sasha</Link>
        </div>
        <div className={styles.dialog}>
          <Link to="/dialogs/3">Olya</Link>
        </div>
        <div className={styles.dialog}>
          <Link to="/dialogs/4">Kirill</Link>
        </div>
        <div className={styles.dialog}>
          <Link to="/dialogs/5">Dima</Link>
        </div>
      </div>
      <div className={styles["messages"]}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>Good morning</div>
        <div className={styles.message}>How are you</div>
      </div>
    </div>
  );
};
