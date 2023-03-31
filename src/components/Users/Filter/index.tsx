import React from "react";
import { Formik } from "formik";

export const FilterForm = () => (
  <Formik
    initialValues={{ term: "", friendType: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
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
        <input
          type="friendType"
          name="friendType"
          onChange={handleChange}
          value={values.friendType}
        />
        <button type="submit" disabled={isSubmitting}>
          Find
        </button>
      </form>
    )}
  </Formik>
);
