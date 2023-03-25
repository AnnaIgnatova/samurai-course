import { FormEventHandler } from "react";
import { Field, reduxForm, SubmitHandler } from "redux-form";
import { ProfileUserData } from "../../../interfaces";
import { FormInput } from "../../UI/Form/Field";

import styles from "./style.module.css";

interface ProfileInfoFormContainerData {
  profile: ProfileUserData;
  toggleEditMode: SubmitHandler<{}, {}, string>;
}

interface ProfileInfoFormData {
  profile: ProfileUserData;
  handleSubmit: SubmitHandler<{}, {}, string>;
  error: any;
}

export const ProfileInfoFormContainer: React.FC<
  ProfileInfoFormContainerData
> = ({ profile, toggleEditMode }) => {
  return (
    <ProfileInfoReduxForm
      onSubmit={toggleEditMode}
      initialValues={profile}
      profile={profile}
    />
  );
};
export const ProfileInfoForm: React.FC<ProfileInfoFormData> = ({
  profile,
  handleSubmit,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Edit user data</h3>
      <div>
        <label>
          User name
          <Field
            name="fullName"
            component={FormInput}
            type="text"
            placeholder="Type Full name"
            className={styles["form-input"]}
          />
        </label>
      </div>
      <div>
        <label>
          About me
          <Field
            name="aboutMe"
            component={FormInput}
            type="text"
            placeholder="About me"
            className={styles["form-input"]}
          />
        </label>
      </div>
      <div className={styles["form-checkbox-container"]}>
        <label>
          Is looking for a job
          <Field
            name="lookingForAJob"
            component={FormInput}
            type="checkbox"
            className={styles["form-checkbox"]}
          />
        </label>
      </div>
      <div>
        <label>
          Looking for a job description
          <Field
            name="lookingForAJobDescription"
            component={FormInput}
            type="text"
            placeholder="Description"
            className={styles["form-input"]}
          />
        </label>
      </div>
      {Object.entries(profile.contacts).map(([key, val]) => (
        <div>
          <label>
            {key}
            <Field
              name={key}
              component={FormInput}
              type="text"
              placeholder={key}
              className={styles["form-input"]}
            />
          </label>
        </div>
      ))}
      {error && <span>{error}</span>}
      <button type="submit">Save</button>
    </form>
  );
};

let ProfileInfoReduxForm = reduxForm<ProfileInfoFormContainerData, any>({
  form: "profileInfo",
})(ProfileInfoForm);
