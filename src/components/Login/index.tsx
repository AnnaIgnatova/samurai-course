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
  };

  useEffect(() => {
    if (isAuth) navigate("/profile/27789");
  }, [isAuth]);

  return <LoginReduxForm onSubmit={handleSubmit} />;
};

let LoginForm: React.FC<LoginFormData> = ({
  handleSubmit,
  error,
  pristine,
  submitting,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          component={FormInput}
          type="email"
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component={FormInput}
          type="password"
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <label htmlFor="rememberMe">remember me</label>
        <Field name="rememberMe" component="input" type="checkbox" />
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
