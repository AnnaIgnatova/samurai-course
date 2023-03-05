import { Field, reduxForm } from "redux-form";
import { FormInput } from "../../UI/Form/Field";

export const ProfileInfoFormContainer: React.FC<any> = ({
  profile,
  toggleEditMode,
}) => {
  return (
    <ProfileInfoReduxForm
      onSubmit={toggleEditMode}
      initialValues={profile}
      profile={profile}
    />
  );
};
export const ProfileInfoForm: React.FC<any> = ({
  profile,
  handleSubmit,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        User name
        <Field
          name="fullName"
          component={FormInput}
          type="text"
          placeholder="Type Full name"
        />
      </label>
      <label>
        About me
        <Field
          name="aboutMe"
          component={FormInput}
          type="text"
          placeholder="About me"
        />
      </label>
      <label>
        Is looking for a job
        <Field name="lookingForAJob" component={FormInput} type="checkbox" />
      </label>
      <label>
        Looking for a job description
        <Field
          name="lookingForAJobDescription"
          component={FormInput}
          type="text"
          placeholder="Description"
        />
      </label>
      {Object.entries(profile.contacts).map(([key, val]) => (
        <label>
          {key}
          <Field
            name={key}
            component={FormInput}
            type="text"
            placeholder={key}
          />
        </label>
      ))}
      {error && <span>{error}</span>}
      <button type="submit">Save</button>
    </form>
  );
};

let ProfileInfoReduxForm: any = reduxForm({
  form: "profileInfo",
})(ProfileInfoForm);
