import { Button } from "antd";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { saveProfileInfoThunk } from "../../../redux/reducers/ProfileReducer";
import styles from "./style.module.css";

export const ProfileInfoForm: React.FC<any> = ({ profile, toggleEditMode }) => {
  const dispatch: any = useDispatch();
  return (
    <Formik
      initialValues={{
        ...profile,
        contacts: {
          ...profile.contacts,
        },
      }}
      onSubmit={(values) => {
        dispatch(saveProfileInfoThunk(values));
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3>Edit user data</h3>
          <div>
            <label>
              User name
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                value={values.fullName}
                placeholder="Type Full name"
                className={styles["form-input"]}
              />
            </label>
          </div>
          <div>
            <label>
              About me
              <input
                name="aboutMe"
                type="text"
                placeholder="About me"
                className={styles["form-input"]}
                onChange={handleChange}
                value={values.aboutMe}
              />
            </label>
          </div>
          <div className={styles["form-checkbox-container"]}>
            <label>
              Is looking for a job
              <input
                name="lookingForAJob"
                type="checkbox"
                className={styles["form-checkbox"]}
                onChange={handleChange}
                value={values.lookingForAJob}
              />
            </label>
          </div>
          <div>
            <label>
              Looking for a job description
              <input
                name="lookingForAJobDescription"
                type="text"
                placeholder="Description"
                onChange={handleChange}
                className={styles["form-input"]}
                value={values.lookingForAJobDescription}
              />
            </label>
          </div>
          {Object.entries(profile.contacts).map(([key, val]) => (
            <div>
              <label>
                {key}
                <input
                  name={key}
                  onChange={handleChange}
                  type="text"
                  placeholder={key}
                  className={styles["form-input"]}
                  value={values.contacts[key]}
                />
              </label>
            </div>
          ))}
          <Button type="primary" size="large" disabled={isSubmitting}>
            Save
          </Button>
        </form>
      )}
    </Formik>
  );
};
