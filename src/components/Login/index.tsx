import React from "react";
import { useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utils/validators";
import { FormInput } from "../UI/Form/Field";
import styles from "./style.module.css";

export interface LoginFormData {
  handleSubmit?: any;
  onSubmit?: any;
  error: any;
  pristine: boolean;
  submitting: boolean;
  captcha: string;
}

const maxLength30 = maxLength(30);

export const Login: React.FC<any> = ({ loginUserThunk, captcha }) => {
  const navigate = useNavigate();
  const handleSubmit = (values: any) => {
    console.log(values);
    loginUserThunk(values);
    // navigate("/profile/27789");
  };

  return <LoginReduxForm onSubmit={handleSubmit} captcha={captcha} />;
};

let LoginForm: React.FC<any> = ({
  handleSubmit,
  error,
  pristine,
  submitting,
  captcha,
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
      {captcha && (
        <>
          <img src={captcha} alt="captcha" />
          <Field
            name="captcha"
            component="input"
            type="text"
            className={styles["form-input"]}
            validate={[required]}
            placeholder="type antibot symbols"
          />
        </>
      )}
      {error && <span className={styles["errors-message"]}>{error}</span>}
      <button type="submit" disabled={pristine || submitting}>
        Log in
      </button>
    </form>
  );
};

let LoginReduxForm: any = reduxForm({
  form: "login",
})(LoginForm);
