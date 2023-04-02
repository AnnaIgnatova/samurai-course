import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

type PropsType = {
  setFilterTerm: any;
};

export const FilterForm: React.FC<PropsType> = ({ setFilterTerm }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ term: "", friendType: "" }}
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
          <button type="submit">
            Find
          </button>
        </form>
      )}
    </Formik>
  );
};
