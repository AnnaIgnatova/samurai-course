import styles from "./style.module.css";

export const FormTextarea: React.FC<any> = ({ input, meta, ...props }) => {
  const isValid = meta.error && meta.touched;
  return (
    <div
      className={`${styles["form-field"]} ${isValid ? styles["error"] : ""}`}
    >
      <textarea {...input} {...props} />
      {isValid && <span>{meta.error}</span>}
    </div>
  );
};

export const FormInput: React.FC<any> = ({ input, meta, ...props }) => {
  const isValid = meta.error && meta.touched;
  return (
    <div
      className={`${styles["form-field"]} ${isValid ? styles["error"] : ""}`}
    >
      <input {...input} {...props} />
      {isValid && <span>{meta.error}</span>}
    </div>
  );
};
