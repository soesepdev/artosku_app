'use client';
import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  LogoutOutlined,
  UserOutlined,
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

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={250}
        style={{
          background: '#001529',
          margin: 0
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Home
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            background: '#fff',
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

          <Dropdown overlay={dropdownMenu}>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Avatar icon={<UserOutlined />} />
              <span style={{ marginLeft: 8 }}>{username}</span>
            </div>
          </Dropdown>
        </Header>

        <Content style={{ margin: 0, padding: 24, background: '#fff' }}>
          <h1>Selamat datang, {username}</h1>
        </Content>
      </Layout>
    </Layout>
  );
}