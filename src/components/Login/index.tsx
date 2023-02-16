import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utils/validators";
import { FormInput } from "../Form/Field";
import "./style.module.css";

export interface LoginFormData {
  handleSubmit?: any;
  onSubmit?: any;
}

const maxLength10 = maxLength(10);

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
        <label htmlFor="accept_data">Accept</label>
        <Field
          name="accept_data"
          component={FormInput}
          type="checkbox"
          validate={[required]}
        />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
