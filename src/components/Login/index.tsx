import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utils/validators";
import { FormInput } from "../Form/Field";
import styles from "./style.module.css";

export interface LoginFormData {
  handleSubmit?: any;
  onSubmit?: any;
  error: any;
  pristine: boolean;
  submitting: boolean;
}

const maxLength30 = maxLength(30);

export const Login: React.FC<any> = ({ loginUserThunk, isAuth }) => {
  const navigate = useNavigate();
  const handleSubmit = (values: any) => {
    loginUserThunk(values);
    navigate("/profile/27789");
  };

  return <LoginReduxForm onSubmit={handleSubmit} />;
};

let LoginForm: React.FC<LoginFormData> = ({
  handleSubmit,
  error,
  pristine,
  submitting,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Log in to social network</h3>
      <div>
        <Field
          name="email"
          component={FormInput}
          type="email"
          validate={[required, maxLength30]}
          placeholder="Email"
          className={styles["form-input"]}
        />
      </div>
      <div>
        <Field
          name="password"
          component={FormInput}
          type="password"
          validate={[required, maxLength30]}
          placeholder="Password"
          className={styles["form-input"]}
        />
      </div>
      <div className={styles["form-checkbox-container"]}>
        <Field
          name="rememberMe"
          component="input"
          type="checkbox"
          className={styles["form-checkbox"]}
        />
        <label htmlFor="rememberMe">remember me</label>
      </div>
      {error && <span className={styles["errors-message"]}>{error}</span>}
      <button type="submit" disabled={pristine || submitting}>
        Log in
      </button>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
