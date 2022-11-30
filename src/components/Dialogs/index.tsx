import styles from "./style.module.css";

export const Dialogs = () => {
  return (
    <div className={styles.container}>
      <div className={styles["dialogs-items"]}>
        <div className={styles.dialog}>Anna</div>
        <div className={styles.dialog}>Sasha</div>
        <div className={styles.dialog}>Olya</div>
        <div className={styles.dialog}>Kirill</div>
        <div className={styles.dialog}>Dima</div>
      </div>
      <div className={styles["messages"]}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>Good morning</div>
        <div className={styles.message}>How are you</div>
      </div>
    </div>
  );
};
