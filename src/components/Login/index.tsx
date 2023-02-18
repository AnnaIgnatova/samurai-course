import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utils/validators";
import { FormInput } from "../Form/Field";
import "./style.module.css";

export interface LoginFormData {
  handleSubmit?: any;
  onSubmit?: any;
}

const maxLength10 = maxLength(10);

export const Login: React.FC<any> = ({ loginUserThunk, isAuth }) => {
  const handleSubmit = (values: any) => {
    loginUserThunk(values);
  };

  return isAuth ? (
    <Navigate to="/profile/27789" />
  ) : (
    <LoginReduxForm onSubmit={handleSubmit} />
  );
};

let LoginForm: React.FC<LoginFormData> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          component={FormInput}
          type="email"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component={FormInput}
          type="password"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <label htmlFor="rememberMe">remember me</label>
        <Field name="rememberMe" component="input" type="checkbox"  validate={[required]} />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
