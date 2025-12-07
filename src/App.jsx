import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Website Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Dashboard Pages
import DashboardHome from "./pages/dashboard/DashboardHome";
import Users from "./pages/dashboard/Users";
import Profile from "./pages/dashboard/Profile";

// Utilities
import NotFound from "./pages/NotFound";
import Login from "./pages/dashboard/Login";
import Component from "./pages/dashboard/Component";
import Register from "./pages/dashboard/Register";

function App() {
  return (
    <>
      <Routes>
        {/* Website Routes */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} /> {/* Shortcut for path="/" */}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="dashboard/login" element={<Login />} />
        <Route path="dashboard/register" element={<Register />} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
          <Route path="components" element={<Component />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
