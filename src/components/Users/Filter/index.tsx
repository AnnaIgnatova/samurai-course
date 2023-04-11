import React from "react";
import { Formik, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Button, Input, Select, Space } from "antd";

export interface FilterFormProps {
  setFilterTerm: any;
  term: string;
  byFriend: string;
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
          <Space>
            <Input name="term" onChange={handleChange} value={values.term} />
            <Select
              defaultValue={String(values.friendType)}
              style={{ width: 120 }}
              onChange={handleChange}
              onSelect={handleChange}
              options={[
                { value: "null", label: "All" },
                { value: "true", label: "followed" },
                { value: "false", label: "not followed" },
              ]}
            />
            <Button htmlType="submit">Find</Button>
          </Space>
        </form>
      )}
    </Formik>
  );
};
