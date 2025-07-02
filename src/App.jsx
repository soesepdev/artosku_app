import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;