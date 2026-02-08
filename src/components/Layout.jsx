import { Link, useLocation } from 'react-router-dom';
import { Store, Layers, Component, Home } from 'lucide-react';
import { clsx } from 'clsx';

export const Layout = ({ children }) => {
    const location = useLocation();
    const path = location.pathname;

    const getTitle = () => {
        switch (path) {
            case '/small': return 'Small Project (Global Store)';
            case '/medium': return 'Medium Project (Async/Computed)';
            case '/large': return 'Large Project (Slices Pattern)';
            default: return 'Zustand Learning Dashboard';
        }
    };

    const isHome = path === '/';

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {!isHome && (
                            <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-full text-gray-500">
                                <Home size={20} />
                            </Link>
                        )}
                        <h1 className="text-xl font-bold text-gray-900">{getTitle()}</h1>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        React + Zustand
                    </div>
                </div>
            </header>

            {/* Navigation Tabs (if not home) */}
            {!isHome && (
                <div className="border-b bg-white">
                    <div className="max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto">
                        <NavLink to="/small" active={path === '/small'} icon={<Component size={16} />}>Small</NavLink>
                        <NavLink to="/medium" active={path === '/medium'} icon={<Layers size={16} />}>Medium</NavLink>
                        <NavLink to="/large" active={path === '/large'} icon={<Store size={16} />}>Large</NavLink>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-8">
                {children}
            </main>
        </div>
    );
};

const NavLink = ({ to, active, children, icon }) => (
    <Link
        to={to}
        className={clsx(
            "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
            active
                ? "border-blue-600 text-blue-600 bg-blue-50/50"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        )}
    >
        {icon}
        {children}
    </Link>
);
