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
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
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
        <SidebarMenu />
      </Sider>

      <Layout>
        <Header style={{ padding: 0 }}>
          <DashboardHeader collapsed={collapsed} toggleSidebar={toggleSidebar} />
        </Header>

        <Content style={{ margin: 0, padding: 24, background: '#fff', minHeight: 'calc(100vh - 64px)' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}