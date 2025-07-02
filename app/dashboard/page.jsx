'use client';
import { Layout, Menu, Dropdown, Avatar, Button } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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

  const menuDropdown = (
    <Menu>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ height: 64, margin: 16, color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
          {collapsed ? 'A' : 'Artosku'}
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Profil
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main */}
      <Layout>
        <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Sidebar Toggle Button */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />

          {/* Right dropdown */}
          <Dropdown overlay={menuDropdown} placement="bottomRight">
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar icon={<UserOutlined />} />
              <span>{username}</span>
            </div>
          </Dropdown>
        </Header>

        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <h1>Selamat datang, {username} 👋</h1>
          <p>Ini adalah halaman dashboard utama.</p>
        </Content>
      </Layout>
    </Layout>
  );
}