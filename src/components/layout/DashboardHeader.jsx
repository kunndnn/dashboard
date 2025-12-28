import { Menu } from "lucide-react";
import CommonButton from "@/components/ui/CommonButton";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { showSuccess } from "@/utils/toast";

export default function DashboardHeader({ setOpen }) {
    const navigate = useNavigate();
    const logout = useAuthStore((s) => s.logout);
    const user = useAuthStore((s) => s.user);
    console.log({ user })
    const handleLogout = () => {
        logout();
        navigate('/dashboard/login');
        showSuccess('Logout successfully');
    }
    return (
        <header className="bg-white dark:bg-black dark:text-white shadow px-6 py-4 flex justify-between items-center dark:border-b">
            <button
                className="md:hidden"
                onClick={() => setOpen(true)}
            >
                <Menu size={26} />
            </button>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center gap-4">
                <span className="text-gray-600 dark:text-gray-100">Hello, {user?.fullName}</span>
                <CommonButton label="Logout" className="cursor-pointer" onClick={() => handleLogout()} />
            </div>
        </header>
    );
};
