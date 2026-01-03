import { NavLink } from "react-router-dom";
import { X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { SIDEBAR } from '@/config/constants'

const sidebar = [
    { url: '/dashboard', label: "Overview" },
    { url: '/dashboard/users', label: "Users" },
    { url: '/dashboard/profile', label: "Profile" },
    { url: '/dashboard/components', label: "Components" },
];

const Sidebar = ({ open, setOpen }) => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    // Apply theme to HTML <html> tag
    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <>
            {/* MOBILE OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 md:hidden z-20"
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed md:static top-0 left-0 w-64 bg-gray-900 text-white dark:bg-gray-800 p-5 z-30
                    transform transition-transform duration-300 h-screen
                    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                `}
            >
                <div className="flex flex-col justify-between h-full">
                    <div>
                        {/* Close button (mobile only) */}
                        <button
                            className="md:hidden mb-4 flex justify-end w-full"
                            onClick={() => setOpen(false)}
                        >
                            <X size={26} />
                        </button>

                        <h2 className="text-xl font-bold mb-5">{SIDEBAR.DASHBOARD}</h2>

                        <nav className="flex flex-col gap-3">
                            {sidebar.map((item, i) => (
                                <NavLink
                                    key={i}
                                    to={item.url}
                                    end={item.url === "/dashboard"}
                                    className={({ isActive }) =>
                                        `block py-2 ${isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"}`
                                    }
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    {/* DARK MODE TOGGLE — Bottom */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="mt-10 flex items-center gap-2 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-200 
                               px-3 py-2 rounded-lg transition dark:text-black cursor-pointer"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
