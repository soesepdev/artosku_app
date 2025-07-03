// layouts/DashboardHeader.jsx
import { Button, Avatar, Dropdown } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function DashboardHeader({ collapsed, toggleSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/');
    window.location.reload();
  };

  const dropdownMenu = {
    items: [
      {
        key: 'profile',
        icon: <UserOutlined />,
        label: 'Profile',
        onClick: () => navigate('/user/profile'),
      },
      {
        type: 'divider',
      },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'Logout',
        onClick: handleLogout,
      },
    ],
  };

  return (
    <div
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
        onClick={toggleSidebar}
      />

      <Dropdown menu={dropdownMenu} placement="bottomRight">
        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar icon={<UserOutlined />} />
          <span>Admin</span>
        </div>
      </Dropdown>
    </div>
  );
}