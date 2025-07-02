'use client';
import { Button, Card, Form, Input, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { login } from '@/utils/auth';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  const onFinish = (values) => {
    login(values.email);
    router.push('/dashboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Login" style={{ width: 400 }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Masukkan email Anda!' },
              { type: 'email', message: 'Format email tidak valid' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Masukkan password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>

          <Typography.Text>
            Belum punya akun? <Link href="/register">Daftar</Link>
          </Typography.Text>
        </Form>
      </Card>
    </div>
  );
}