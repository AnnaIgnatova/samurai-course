import React from "react";
import { Field, reduxForm } from "redux-form";

import "./style.module.css";

export interface LoginFormData {
  handleSubmit: any;
}

export const Login: React.FC = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      login page
      <LoginReduxForm handleSubmit={onSubmit} />
    </div>
  );
};

export const LoginForm: React.FC<LoginFormData> = ({ handleSubmit }) => {
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
        <label htmlFor="accept_data">Accept</label>
        <Field name="accept_data" component="input" type="checkbox" />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

export const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
