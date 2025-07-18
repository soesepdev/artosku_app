import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Input, Typography, message } from 'antd';

export default function Register() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
    message.success('Akun berhasil dibuat!');
    navigate("/");
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      height: '100vh',
    }}>
      <div style={{
        flex: 2,
        backgroundColor: '#EAEFEF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        height: isMobile ? 300 : 'auto'
      }}>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/financial-management-illustration-download-in-svg-png-gif-file-formats--analytics-logo-businessman-managing-investment-growth-money-business-finance-pack-professionals-illustrations-4309053.png"
          alt="Banner"
          style={{
            width: isMobile ? '80%' : '60%',
            height: 250,
            objectFit: 'cover',
            borderRadius: 12,
            marginBottom: 20,
          }}
        />
        {!isMobile && (
          <Typography.Title level={3} style={{ textAlign: 'center', color: '#333' }}>
            <b>artosku</b> bantu kamu kelola keuangan lebih mudah & rapi
          </Typography.Title>
        )}
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 24
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://aqbgvzzymp.cloudimg.io/v7/barokahabadi.co.id/wp-content/uploads/2020/11/dummy-logo-1b.png"
              alt="artosku"
              style={{ width: 200, height: 'auto' }}
            />
          </div>

          <Form layout="vertical" onFinish={handleSubmit} style={{ padding: 10 }}>
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
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  paddingTop: 18,
                  paddingBottom: 18,
                  borderRadius: 12,
                  backgroundColor: '#0D5EA6'
                }}
              >
                Daftar
              </Button>
            </Form.Item>

            <Form.Item style={{ marginTop: 0, textAlign: 'center' }}>
              <Typography.Text>
                Sudah punya akun? <Link to="/">Login</Link>
              </Typography.Text>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}