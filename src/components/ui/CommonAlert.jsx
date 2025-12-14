import { AlertCircle, CheckCircle, Info, XCircle, X } from "lucide-react";
import { useState } from "react";

const variants = {
    info: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
    success: "bg-green-50 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
    danger: "bg-red-50 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
};

const icons = {
    info: <Info size={20} />,
    success: <CheckCircle size={20} />,
    warning: <AlertCircle size={20} />,
    danger: <XCircle size={20} />,
};

export default function CommonAlert({ 
    type = "info", 
    title, 
    children, 
    dismissible = false,
    className = "" 
}) {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className={`flex items-start p-4 mb-4 text-sm border rounded-lg ${variants[type]} ${className}`} role="alert">
            <div className="flex-shrink-0 inline w-5 h-5 mr-3">
                {icons[type]}
            </div>
            <div className="flex-1">
                {title && <h3 className="font-medium mb-1 text-lg">{title}</h3>}
                <div className="mt-0.5">{children}</div>
            </div>
            {dismissible && (
                <button 
                    type="button" 
                    className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 hover:bg-black/5 dark:hover:bg-white/10`}
                    onClick={() => setVisible(false)}
                >
                    <X size={18} />
                </button>
            )}
        </div>
    );
}

/**
 * CommonAlert
 * 
 * Usage:
 * <CommonAlert type="info" title="Information">
 *   This is an info alert.
 * </CommonAlert>
 * 
 * Props:
 * - type: "info" | "success" | "warning" | "danger" (default: "info")
 * - title: string (optional)
 * - children: ReactNode (content)
 * - dismissible: boolean (default: false)
 */
