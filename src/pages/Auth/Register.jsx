import React from "react";
import { Button, Form, Input, Typography, message } from "antd";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    message.success("Registrasi sukses. Silakan login.");
    navigate("/");
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <Typography.Title level={2}>Daftar</Typography.Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Daftar</Button>
        </Form.Item>
        <Form.Item>
          Sudah punya akun? <Link to="/">Login</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;