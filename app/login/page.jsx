'use client';
import { Button, Form, Input, Typography } from 'antd';
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
    <div style={{ display: 'flex', height: '100vh' }}>
      
      {/* KIRI - Gambar tengah + Teks */}
      <div style={{
        flex: 2,
        backgroundColor: '#EAEFEF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/financial-management-illustration-download-in-svg-png-gif-file-formats--analytics-logo-businessman-managing-investment-growth-money-business-finance-pack-professionals-illustrations-4309053.png"
          alt="Banner"
          style={{
            width: '60%',
            height: 250,
            objectFit: 'cover',
            borderRadius: 12,
            marginBottom: 20,
          }}
        />

        <Typography.Title level={3} style={{ textAlign: 'center', color: '#333' }}>
          Artosku bantu kamu kelola keuangan lebih mudah & rapi
        </Typography.Title>
      </div>

      {/* KANAN - Form Login */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          <Form layout="vertical" onFinish={onFinish} style={{ padding: 10 }}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Masukkan email Anda!' },
                { type: 'email', message: 'Format email tidak valid' },
              ]}
              style={{ marginBottom: 20 }}
            >
              <Input style={{ paddingTop: 7, paddingBottom: 7, borderRadius: 12 }} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Masukkan password!' }]}
              style={{ marginBottom: 0 }}
            >
              <Input.Password style={{ paddingTop: 7, paddingBottom: 7, borderRadius: 12 }} />
            </Form.Item>

            <Form.Item style={{ marginTop: 0, textAlign: 'end' }}>
              <Typography.Text>
                <Link href="/">Lupa Password?</Link>
              </Typography.Text>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block style={{
                paddingTop: 18,
                paddingBottom: 18,
                borderRadius: 12,
                backgroundColor: '#0D5EA6'
              }}>
                Login
              </Button>
            </Form.Item>

            <Form.Item style={{ marginTop: 0, textAlign: 'center' }}>
              <Typography.Text>
                Belum punya akun? <Link href="/register">Daftar</Link>
              </Typography.Text>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}