import { Menu } from "lucide-react";
import CommonButton from "../../CommonButton";
import { useNavigate } from "react-router-dom";

export default function Header({ setOpen }) {
    const navigate = useNavigate();

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
                <span className="text-gray-600 dark:text-gray-100">Hello, User</span>
                <CommonButton label="Logout" className="cursor-pointer" onClick={() => navigate('/dashboard/login')} />
            </div>
        </header>
    );
};
