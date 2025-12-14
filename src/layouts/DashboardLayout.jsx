import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "@/components/layout/DashboardHeader";
import Footer from "@/components/layout/DashboardFooter";
import { useState } from "react";

const DashboardLayout = () => {
    const [open, setOpen] = useState(false);
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
