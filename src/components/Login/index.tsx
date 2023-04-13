import { Button, Checkbox, Form, Input } from "antd";
import { Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StateData } from "../../interfaces";
import { loginUserThunk } from "../../redux/reducers/AuthReducer";
import styles from "./style.module.css";

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const captcha = useSelector((state: StateData) => state.header.captcha);
  const isAuth = useSelector((state: StateData) => state.header.isAuth);
  const dispatch: any = useDispatch();

  const onFinish = (values: any) => {
    dispatch(loginUserThunk({ ...values }));
    navigate("/profile");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
        captcha: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h3>Log in to social network</h3>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rememberMe"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      {captcha && (
        <>
          <img src={captcha} alt="captcha" />
          <Form.Item
            label="type antibot symbols"
            name="captcha"
            rules={[{ required: true, message: "Please type capthca" }]}
          >
            <Input />
          </Form.Item>
        </>
      )}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
