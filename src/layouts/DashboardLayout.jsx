import { useState } from 'react';
import { Layout } from 'antd';
import SidebarMenu from './SidebarMenu';
import DashboardHeader from './DashboardHeader';

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <Sider
        collapsed={collapsed}
        width={220}
        style={{
          background: '#fff',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
        }}
      >
        {/* ✅ Logo pakai URL */}
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 16px',
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          <img
            src={collapsed ? 'https://aqbgvzzymp.cloudimg.io/v7/barokahabadi.co.id/wp-content/uploads/2020/11/dummy-logo-1b.png' : 'https://aqbgvzzymp.cloudimg.io/v7/barokahabadi.co.id/wp-content/uploads/2020/11/dummy-logo-1b.png'}
            alt="Logo"
            style={{
              height: 70 ,
              transition: 'all 0.2s',
              objectFit: 'contain',
            }}
          />
        </div>

        <SidebarMenu />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 220, transition: 'all 0.2s' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <DashboardHeader collapsed={collapsed} toggleSidebar={toggleSidebar} />
        </Header>

        <Content
          style={{
            padding: 24,
            background: '#f5f5f5',
            height: 'calc(100vh - 64px)',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: 24,
              borderRadius: 8,
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}