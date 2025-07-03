import { useEffect, useState } from 'react';
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
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated()) {
  //     navigate('/login');
  //   } else {
  //     setUsername(getUsername());
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const dropdownMenu = (
    <Menu
      items={[
        {
          key: 'logout',
          icon: <LogoutOutlined />,
          label: 'Logout',
          onClick: handleLogout,
        },
      ]}
    />
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={220}
        style={{
          background: '#001529',
        }}
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
          items={[
            {
              key: 'home',
              icon: <DashboardOutlined />,
              label: 'Home',
            },
            {
              type: 'group',
              key: 'transaksi',
              label: 'Transaksi',
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
              icon: <DollarCircleOutlined />,
            },
            {
              type: 'group',
              key: 'master',
              label: 'Master',
              icon: <AppstoreOutlined />,
              children: [
                {
                  key: 'icon',
                  icon: <UserOutlined />,
                  label: 'Icon',
                },
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

          <Dropdown overlay={dropdownMenu} placement="bottomRight">
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar icon={<UserOutlined />} />
              <span>{username}</span>
            </div>
          </Dropdown>
        </Header>

        <Content style={{ margin: 0, padding: 24, background: '#fff', minHeight: 'calc(100vh - 64px)' }}>
          <Typography.Title level={3}>Selamat datang, {username} 👋</Typography.Title>
          <p>Ini adalah halaman dashboard utama.</p>
        </Content>
      </Layout>
    </Layout>
  );
}