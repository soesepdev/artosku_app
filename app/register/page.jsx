'use client';
import { Button, Form, Input, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();

  const onFinish = (values) => {
    // Simulasi register
    console.log('Registered user:', values);
    router.push('/dashboard'); // Redirect setelah register
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

      {/* KANAN - Form Register */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://aqbgvzzymp.cloudimg.io/v7/barokahabadi.co.id/wp-content/uploads/2020/11/dummy-logo-1b.png" // pastikan file ada di folder public
              alt="Logo Artosku"
              style={{
                width: 200,
                height: 'auto',
              }}
            />
          </div>
          <Form layout="vertical" onFinish={onFinish} style={{ padding: 10 }}>
            <Form.Item
              label="Nama Lengkap"
              name="nama"
              rules={[{ required: true, message: 'Masukkan nama lengkap Anda!' }]}
              style={{ marginBottom: 20 }}
            >
              <Input style={{ paddingTop: 7, paddingBottom: 7, borderRadius: 12 }} />
            </Form.Item>

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
              style={{ marginBottom: 20 }}
            >
              <Input.Password style={{ paddingTop: 7, paddingBottom: 7, borderRadius: 12 }} />
            </Form.Item>

            <Form.Item
              label="Konfirmasi Password"
              name="confirmPassword"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Konfirmasi password Anda!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Password tidak cocok!'));
                  },
                }),
              ]}
            >
              <Input.Password style={{ paddingTop: 7, paddingBottom: 7, borderRadius: 12 }} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block style={{
                paddingTop: 18,
                paddingBottom: 18,
                borderRadius: 12,
                backgroundColor: '#0D5EA6'
              }}>
                Daftar
              </Button>
            </Form.Item>

            <Form.Item style={{ marginTop: 0, textAlign: 'center' }}>
              <Typography.Text>
                Sudah punya akun? <Link href="/">Login</Link>
              </Typography.Text>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}