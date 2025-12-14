export default function CommonBadge({ label, variant = "primary", className = "" }) {
    const variants = {
        primary: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
        danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant] || variants.gray} ${className}`}>
            {label}
        </span>
    );
}

/**
 * CommonBadge
 * 
 * Usage:
 * <CommonBadge label="Admin" variant="primary" />
 * 
 * Props:
 * - label: string
 * - variant: "primary" | "success" | "warning" | "danger" | "gray" (default: "primary")
 * - className: string
 */
