import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "@/components/layout/DashboardHeader";
import Footer from "@/components/layout/DashboardFooter";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";

const DashboardLayout = () => {
    const [open, setOpen] = useState(false);
    const { status } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!status) {
            navigate("/dashboard/login");
        }
    }, [status, navigate]);

    if (!status) return null; // Or a loader

    return (
        <div className="flex min-h-screen">
            <Sidebar open={open} setOpen={setOpen} />
            <div className="flex-1 flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
                <Header setOpen={setOpen} />
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default DashboardLayout;
