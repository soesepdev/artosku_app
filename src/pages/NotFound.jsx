import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Halaman tidak ditemukan."
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Kembali
        </Button>
      }
    />
  );
}