'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';
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
import { isAuthenticated, logout, getUsername } from '@/utils/auth';

const { Header, Sider, Content } = Layout;

export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    } else {
      setUsername(getUsername());
    }
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={220}
        style={{
          background: '#001529',
        }}
      >
        {/* Logo Area (hapus margin!) */}
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
        >
          <Menu.Item key="home" icon={<DashboardOutlined />}>
            Home
          </Menu.Item>

          <Menu.SubMenu key="transaksi" icon={<DollarCircleOutlined />} title="Transaksi">
            <Menu.Item key="pemasukan" icon={<DownloadOutlined />}>
              Pemasukan
            </Menu.Item>
            <Menu.Item key="pengeluaran" icon={<UploadOutlined />}>
              Pengeluaran
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="master" icon={<AppstoreOutlined />} title="Master">
            <Menu.Item key="icon" icon={<UserOutlined />}>
              Icon
            </Menu.Item>
            <Menu.Item key="kategori" icon={<TagsOutlined />}>
              Kategori
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>

      {/* Main Layout */}
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
          <h1>Selamat datang, {username} 👋</h1>
          <p>Ini adalah halaman dashboard utama.</p>
        </Content>
      </Layout>
    </Layout>
  );
}