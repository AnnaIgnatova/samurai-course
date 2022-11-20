import styles from "./style.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="./assets/network-icon.png" alt="network icon" />
    </header>
  );
};
