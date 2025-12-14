import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function CommonBreadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    // If we are on dashboard root, don't show breadcrumb or just show Dashboard
    if (pathnames.length === 0 || (pathnames.length === 1 && pathnames[0] === "dashboard")) {
        return null; 
    }

    return (
        <nav className="flex items-center text-sm text-gray-500 mb-6 bg-white dark:bg-gray-900 px-4 py-3 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
             <Link to="/dashboard" className="flex items-center hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Home size={16} className="mr-1" />
                Dashboard
             </Link>
             {pathnames.map((value, index) => {
                 const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                 
                 // Skip "dashboard" in the loop as we added it manually
                 if(value === "dashboard") return null;

                 const isLast = index === pathnames.length - 1;

                 return (
                     <span key={to} className="flex items-center">
                         <ChevronRight size={16} className="mx-2 text-gray-400" />
                         {isLast ? (
                             <span className="font-medium text-gray-800 dark:text-gray-200 capitalize">
                                 {value}
                             </span>
                         ) : (
                             <Link to={to} className="capitalize hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                                 {value}
                             </Link>
                         )}
                     </span>
                 );
             })}
        </nav>
    );
}

/**
 * CommonBreadcrumb
 * 
 * Usage:
 * <CommonBreadcrumb />
 * 
 * Requires:
 * - Must be used within a react-router-dom context (Router).
 * - Place this at the top of your page component or layout.
 * - It automatically reads the URL to generate breadcrumbs.
 */
