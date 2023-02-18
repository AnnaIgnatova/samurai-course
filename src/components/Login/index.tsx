import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import "./style.module.css";

export interface LoginFormData {
  handleSubmit?: any;
  onSubmit?: any;
}

export const Login: React.FC<any> = ({ loginUserThunk, isAuth }) => {
  const handleSubmit = (values: any) => {
    loginUserThunk(values);
  };

  return isAuth ? (
    <Navigate to="/profile" />
  ) : (
    <LoginReduxForm onSubmit={handleSubmit} />
  );
};

let LoginForm: React.FC<LoginFormData> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div>
        <label htmlFor="rememberMe">remember me</label>
        <Field name="rememberMe" component="input" type="checkbox" />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
