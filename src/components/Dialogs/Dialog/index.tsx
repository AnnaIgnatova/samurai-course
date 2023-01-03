import { Link } from "react-router-dom";
import styles from "./style.module.css";

export interface DialogData {
  id: number;
  name: string;
}

export const Dialog: React.FC<DialogData> = ({ id, name }) => {
  const route = `/dialogs/${id}`;
  return (
    <div className={styles.dialog}>
      <Link to={route}>{name}</Link>
    </div>
  );
};
