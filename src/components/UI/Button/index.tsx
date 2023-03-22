import styles from "./style.module.css";

interface ButtonData {
  onClick: (e: React.MouseEvent) => void;
  text: string;
  disabled?: boolean;
}

export const FilledButton: React.FC<ButtonData> = ({ onClick, text, disabled }) => {
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>
      {text}
    </button>
  );
};
