import { Typography, Descriptions, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function Profile() {
  return (
    <>
      <Typography.Title level={3}>Profil Pengguna</Typography.Title>
      <div style={{ marginBottom: 24 }}>
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Nama">Admin</Descriptions.Item>
        <Descriptions.Item label="Email">admin@artosku.com</Descriptions.Item>
        <Descriptions.Item label="Role">Administrator</Descriptions.Item>
      </Descriptions>
    </>
  );
}