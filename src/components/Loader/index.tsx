import loaderURL from "../../assets/loader.gif";
import styles from "./style.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <img src={loaderURL} alt="loader" />
    </div>
  );
};
