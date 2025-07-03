import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Button,
  Typography,
} from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  DollarCircleOutlined,
  DownloadOutlined,
  UploadOutlined,
  AppstoreOutlined,
  UserOutlined,
  TagsOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("auth", "false");
    navigate('/');
  };

  const dropdownMenu = {
    items: [
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'Logout',
        onClick: handleLogout,
      },
    ],
  };

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case 'home':
        navigate('/dashboard');
        break;
      // case 'pemasukan':
      //   navigate('/pemasukan');
      //   break;
      // case 'pengeluaran':
      //   navigate('/pengeluaran');
      //   break;
      // case 'icon':
      //   navigate('/icon');
      //   break;
      // default:
      //   break;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={220}
        style={{ background: '#001529' }}
      >
        <div
          style={{
            height: 64,
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: '64px',
          }}
        >
          {collapsed ? 'A' : 'Artosku'}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['home']}
          style={{ borderRight: 0 }}
          onClick={handleMenuClick}
          items={[
            {
              key: 'home',
              icon: <DashboardOutlined />,
              label: 'Home',
            },
            {
              key: 'transaksi-group',
              label: 'Transaksi',
              type: 'group',
              children: [
                {
                  key: 'pemasukan',
                  icon: <DownloadOutlined />,
                  label: 'Pemasukan',
                },
                {
                  key: 'pengeluaran',
                  icon: <UploadOutlined />,
                  label: 'Pengeluaran',
                },
              ],
            },
            {
              key: 'master-group',
              label: 'Master',
              type: 'group',
              children: [
                {
                  key: 'kategori',
                  icon: <TagsOutlined />,
                  label: 'Kategori',
                },
              ],
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 64,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />

          <Dropdown menu={dropdownMenu} placement="bottomRight">
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar icon={<UserOutlined />} />
              <span>Admin</span>
            </div>
          </Dropdown>
        </Header>

        <Content style={{ margin: 0, padding: 24, background: '#fff', minHeight: 'calc(100vh - 64px)' }}>
          <Typography.Title level={3}>Selamat datang, Admin 👋</Typography.Title>
          <p>Ini adalah halaman dashboard utama.</p>
        </Content>
      </Layout>
    </Layout>
  );
}