import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators";
import { FormInput } from "../../UI/Form/Field";

const maxLength30 = maxLength(30);

export const ProfileInfoFormContainer: React.FC<any> = ({
  profile,
  toggleEditMode,
}) => {
  return <ProfileInfoReduxForm onSubmit={toggleEditMode} profile={profile} />;
};
export const ProfileInfoForm: React.FC<any> = ({ profile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        User name
        <Field
          name="fullName"
          component={FormInput}
          type="text"
          validate={[required, maxLength30]}
          placeholder="Type Full name"
        />
      </label>
      <label>
        Is looking for a job
        <Field
          name="lookingForAJob"
          component={FormInput}
          type="checkbox"
          validate={[required]}
        />
      </label>
      <label>
        Looking for a job description
        <Field
          name="lookingForAJobDescription"
          component={FormInput}
          type="text"
          validate={[required]}
          placeholder="Description"
        />
      </label>
      {profile.contacts.map((contact) => (
        <label>
          {contact}
          <Field
            name={contact}
            component={FormInput}
            type="text"
            validate={[required]}
            placeholder={contact}
          />
        </label>
      ))}
      <button type="submit">Save</button>
    </form>
  );
};

let ProfileInfoReduxForm = reduxForm({
  form: "profileInfo",
})(ProfileInfoForm);
