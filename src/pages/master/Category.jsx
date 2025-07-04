import { useNavigate } from "react-router-dom";
import { Breadcrumb, Form, Input, Select, Button, Typography, message } from "antd";

const { Title } = Typography;
const { Option } = Select;

export default function Category() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Data kategori:", values);
    message.success("Kategori berhasil disimpan");
    navigate("/master/category");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0", padding: 0 }}>
      {/* ✅ Breadcrumb */}
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate("/master/category")} style={{ cursor: "pointer" }}>
          Kategori
        </Breadcrumb.Item>
        <Breadcrumb.Item>Tambah</Breadcrumb.Item>
      </Breadcrumb>

      <Title level={3}>Tambah Kategori</Title>

      <Form
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ type: "income" }}
      >
        <Form.Item
          label="Nama Kategori"
          name="name"
          rules={[{ required: true, message: "Masukkan nama kategori!" }]}
        >
          <Input placeholder="Contoh: Gaji, Makan, Transportasi" />
        </Form.Item>

        <Form.Item
          label="Jenis Kategori"
          name="type"
          rules={[{ required: true, message: "Pilih jenis kategori!" }]}
        >
          <Select>
            <Option value="income">Pendapatan</Option>
            <Option value="expense">Pengeluaran</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ borderRadius: 8, padding: "12px 24px", backgroundColor: "#0D5EA6" }}
          >
            Simpan
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}