import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

export interface FilterFormProps {
  setFilterTerm: any;
  term?: string;
  byFriend?: boolean;
}

export const FilterForm: React.FC<FilterFormProps> = ({
  setFilterTerm,
  term,
  byFriend,
}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      enableReinitialize
      initialValues={{ term, friendType: byFriend }}
      onSubmit={(values) => {
        dispatch(setFilterTerm(values.term, values.friendType));
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="term"
            name="term"
            onChange={handleChange}
            value={values.term}
          />
          <select
            name="friendType"
            value={values.friendType}
            onChange={handleChange}
          >
            <option value="null">All</option>
            <option value="true">followed</option>
            <option value="false">not followed</option>
          </select>
          <button type="submit">Find</button>
        </form>
      )}
    </Formik>
  );
};
