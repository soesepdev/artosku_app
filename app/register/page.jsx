'use client';
import { Button, Card, Form, Input, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { login } from '@/utils/auth';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();

  const onFinish = (values) => {
    login(values.email);
    router.push('/dashboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Register" style={{ width: 400 }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[{ required: true, message: 'Masukkan nama lengkap!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Masukkan email!' },
              { type: 'email', message: 'Email tidak valid' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Masukkan password!' }]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Ulangi Password"
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Ulangi password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Password tidak cocok!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>

          <Typography.Text>
            Sudah punya akun? <Link href="/login">Login</Link>
          </Typography.Text>
        </Form>
      </Card>
    </div>
  );
}