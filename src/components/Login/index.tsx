import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateData } from "../../interfaces";
import { loginUserThunk } from "../../redux/reducers/AuthReducer";
import styles from "./style.module.css";

export const LoginForm: React.FC = () => {
  const captcha = useSelector((state: StateData) => state.header.captcha);
  const dispatch: any = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
        captcha: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        dispatch(loginUserThunk(values));
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3>Log in to social network</h3>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
            className={styles["form-input"]}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            className={styles["form-input"]}
          />
          <input
            name="rememberMe"
            type="checkbox"
            className={styles["form-checkbox"]}
          />
          <label htmlFor="rememberMe">remember me</label>
          <>
            {captcha && (
              <>
                <img src={captcha} alt="captcha" />
                <input
                  name="captcha"
                  type="text"
                  className={styles["form-input"]}
                  placeholder="type antibot symbols"
                />
              </>
            )}
          </>
          <button type="submit" disabled={isSubmitting}>
            Log in
          </button>
        </form>
      )}
    </Formik>
  );
};
