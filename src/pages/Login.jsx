import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography, message } from 'antd';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    if (values.email === 'admin@email.com' && values.password === 'admin123') {
      localStorage.setItem("auth", "true");
      navigate("/home");
    } else {
      message.error('Email atau password salah!');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
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
          <b>artosku</b> bantu kamu kelola keuangan lebih mudah & rapi
        </Typography.Title>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>

          <div style={{ textAlign: 'center'}}>
            <img
              src="https://aqbgvzzymp.cloudimg.io/v7/barokahabadi.co.id/wp-content/uploads/2020/11/dummy-logo-1b.png"
              alt="Logo Artosku"
              style={{
                width: 200,
                height: 'auto',
              }}
            />
          </div>

          <Form layout="vertical" 
            onFinish={handleSubmit} 
            style={{ padding: 10 }}
            initialValues={{
              email: 'admin@email.com',
              password: 'admin123',
            }}
          >
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
                Belum punya akun? <Link to="/register">Daftar</Link>
              </Typography.Text>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
