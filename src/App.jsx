import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  const ProtectedLayout = () => {
    const isLoggedIn = localStorage.getItem("auth");

    return isLoggedIn === "true" ? (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ) : (
      <Navigate to="/" />
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;