import React from "react";
import { Row, Col, Card } from "antd";

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <Row gutter={16}>
        <Col span={8}><Card title="Users">1,200</Card></Col>
        <Col span={8}><Card title="Revenue">$21,000</Card></Col>
        <Col span={8}><Card title="Sessions">3,500</Card></Col>
      </Row>
    </>
  );
};

export default Dashboard;