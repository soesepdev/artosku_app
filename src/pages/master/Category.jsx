import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  Table,
  Typography,
  Button,
  Space,
  Tag,
  Card,
  Select,
  Modal,
  message,
  Input,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Title } = Typography;
const { Option } = Select;
const { confirm } = Modal;

export default function CategoryTable() {
  const navigate = useNavigate();

  // Dummy data awal
  const initialData = [
    { key: "1", name: "Gaji", type: "income" },
    { key: "2", name: "Makan", type: "expense" },
    { key: "3", name: "Transportasi", type: "expense" },
    { key: "4", name: "Freelance", type: "income" },
  ];

  const [dataSource, setDataSource] = useState(initialData);
  const [filteredType, setFilteredType] = useState("all");
  const [searchText, setSearchText] = useState("");

  const handleDelete = (key) => {
    confirm({
      title: "Yakin ingin menghapus kategori ini?",
      icon: <ExclamationCircleOutlined />,
      okText: "Ya",
      okType: "danger",
      cancelText: "Batal",
      onOk() {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
        message.success("Kategori berhasil dihapus");
      },
    });
  };

  const handleFilterChange = (value) => setFilteredType(value);
  const handleSearch = (e) => setSearchText(e.target.value);

  const filteredData = dataSource.filter((item) => {
    const matchType = filteredType === "all" || item.type === filteredType;
    const matchSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchType && matchSearch;
  });

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "no",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Nama Kategori",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Jenis Kategori",
      dataIndex: "type",
      key: "type",
      render: (type) =>
        type === "income" ? (
          <Tag color="green">Pendapatan</Tag>
        ) : (
          <Tag color="red">Pengeluaran</Tag>
        ),
    },
    {
      title: "Aksi",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={() => navigate(`/master/category/edit/${record.key}`)}
          />
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            size="small"
            onClick={() => handleDelete(record.key)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 16 }}>
      <Breadcrumb style={{ marginBottom: 8 }}>
        <Breadcrumb.Item onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item>Kategori</Breadcrumb.Item>
      </Breadcrumb>

      <Title level={4} style={{ margin: 0, marginBottom: 12 }}>
        Daftar Kategori
      </Title>

      <Card bordered style={{ borderRadius: 10 }}>
        {/* Filter dan pencarian */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 12,
          }}
        >
          <Space>
            <Select
              defaultValue="all"
              onChange={handleFilterChange}
              style={{ width: 160 }}
              size="small"
            >
              <Option value="all">Semua</Option>
              <Option value="income">Pendapatan</Option>
              <Option value="expense">Pengeluaran</Option>
            </Select>

            <Input
              placeholder="Cari kategori"
              allowClear
              onChange={handleSearch}
              style={{ width: 200 }}
              size="small"
            />
          </Space>

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate("/master/category/create")}
            style={{ borderRadius: 6, backgroundColor: "#0D5EA6" }}
            size="small"
          >
            Tambah
          </Button>
        </div>

        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 5 }}
          rowKey="key"
          size="small"
        />
      </Card>
    </div>
  );
}