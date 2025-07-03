import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Home from "./pages/dashboard/Home";

import Profile from "./pages/user/Profile";

import Income from "./pages/transaction/Income";
import Expense from "./pages/transaction/Expense";
import Budget from "./pages/transaction/Budget";

import Category from "./pages/master/Category";
import Icon from "./pages/master/Icon";

import NotFound  from "./pages/NotFound";

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
          <Route path="/user/profile" element={<Profile />} />

          <Route path="/transaction/income" element={<Income />} />
          <Route path="/transaction/expense" element={<Expense />} />
          <Route path="/transaction/budget" element={<Budget />} />

          <Route path="/master/category" element={<Category />} />
          <Route path="/master/icon" element={<Icon />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;