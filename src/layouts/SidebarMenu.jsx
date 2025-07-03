// layouts/SidebarMenu.jsx
import { Menu } from 'antd';
import {
  DashboardOutlined,
  DownloadOutlined,
  UploadOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function SidebarMenu() {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case 'home':
        navigate('/home');
        break;
      case 'income':
        navigate('/transaction/income');
        break;
      case 'expense':
        navigate('/transaction/expense');
        break;
      case 'budget':
        navigate('/transaction/budget');
        break;
      case 'category':
        navigate('/master/category');
        break;
      case 'icon':
        navigate('/master/icon');
        break;
      default:
        break;
    }
  };

  return (
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
          key: 'master-group',
          label: 'Master',
          type: 'group',
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
  );
}