import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, lazy } from "react";
import { Loader } from "@/components/ui/Loader";

// Layouts
const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const DashboardLayout = lazy(() => import("@/layouts/DashboardLayout"));

// Website Pages
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Contact = lazy(() => import("@/pages/Contact"));

// Dashboard Pages
const DashboardHome = lazy(() => import("@/pages/dashboard/DashboardHome"));
const Users = lazy(() => import("@/pages/dashboard/Users"));
const Profile = lazy(() => import("@/pages/dashboard/Profile"));
const Login = lazy(() => import("@/pages/dashboard/Login"));
const Register = lazy(() => import("@/pages/dashboard/Register"));
const Component = lazy(() => import("@/pages/dashboard/Component"));

// Utilities
const NotFound = lazy(() => import("@/pages/NotFound"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center dark:bg-black"><Loader /></div>}>
        <Routes>
          {/* Website Routes */}
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
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
      </Suspense>

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
