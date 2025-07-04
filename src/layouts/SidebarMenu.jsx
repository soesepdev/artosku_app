import { Menu } from 'antd';
import {
  DashboardOutlined,
  DownloadOutlined,
  UploadOutlined,
  TagsOutlined,
  SwapOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SidebarMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const keyMap = {
    '/home': 'home',
    '/transaction/income': 'income',
    '/transaction/expense': 'expense',
    '/transaction/budget': 'budget',
    '/master/category': 'category',
    '/master/icon': 'icon',
  };

  const [selectedKey, setSelectedKey] = useState('home');
  const [openKeys, setOpenKeys] = useState([]);

  useEffect(() => {
    const currentKey = keyMap[location.pathname] || 'home';
    setSelectedKey(currentKey);

    if (['income', 'expense', 'budget'].includes(currentKey)) {
      setOpenKeys(['transaksi']);
    } else if (['category', 'icon'].includes(currentKey)) {
      setOpenKeys(['master']);
    }
  }, [location.pathname]);

  const handleMenuClick = ({ key }) => {
    const routes = {
      home: '/home',
      income: '/transaction/income',
      expense: '/transaction/expense',
      budget: '/transaction/budget',
      category: '/master/category',
      icon: '/master/icon',
    };

    if (routes[key]) navigate(routes[key]);
  };

  return (
    <div style={{ height: '100%', background: '#fff' }}>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        onClick={handleMenuClick}
        style={{ borderRight: 0 }}
        items={[
          {
            key: 'home',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
          },
          {
            key: 'transaksi',
            icon: <SwapOutlined />, // ✅ Tambahkan icon di menu utama
            label: 'Transaksi',
            children: [
              {
                key: 'income',
                icon: <DownloadOutlined />,
                label: 'Pemasukan',
              },
              {
                key: 'expense',
                icon: <UploadOutlined />,
                label: 'Pengeluaran',
              },
              {
                key: 'budget',
                icon: <UploadOutlined />,
                label: 'Budget',
              },
            ],
          },
          {
            key: 'master',
            icon: <SettingOutlined />, // ✅ Tambahkan icon di menu utama
            label: 'Master',
            children: [
              {
                key: 'category',
                icon: <TagsOutlined />,
                label: 'Kategori',
              },
              {
                key: 'icon',
                icon: <TagsOutlined />,
                label: 'Ikon',
              },
            ],
          },
        ]}
      />
    </div>
  );
}