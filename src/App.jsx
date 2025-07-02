import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import Dashboard from "./pages/Dashboard/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <Layout style={{ minHeight: "100vh" }}>
              <Layout>
                <Content style={{ margin: "16px" }}>
                  <Routes>
                    <Route path="/home" element={<Dashboard />} />
                  </Routes>
                </Content>
              </Layout>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;