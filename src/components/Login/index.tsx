import React from "react";
import { Field, reduxForm } from "redux-form";
import "./style.module.css";

export interface LoginFormData {
  handleSubmit?: any;
  onSubmit?: any;
}

export const Login = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return <LoginReduxForm onSubmit={handleSubmit} />;
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
        <label htmlFor="accept_data">Accept</label>
        <Field name="accept_data" component="input" type="checkbox" />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);
