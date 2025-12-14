import { User } from "lucide-react";
import CommonImage from "./CommonImage";

export default function CommonAvatar({
    src,
    alt = "User",
    size = "md", // sm, md, lg, xl
    status, // online, offline, busy, away
    className = ""
}) {
    const sizeClasses = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-lg"
    };

    const statusColors = {
        online: "bg-green-500",
        offline: "bg-gray-400",
        busy: "bg-red-500",
        away: "bg-yellow-500"
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <div className={`${sizeClasses[size] || sizeClasses.md} rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center border border-gray-200 dark:border-gray-600`}>
                {src ? (
                    <CommonImage 
                        src={src} 
                        alt={alt} 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <User className="text-gray-400 w-[60%] h-[60%]" />
                )}
            </div>
            
            {status && (
                <span className={`absolute bottom-0 right-0 block w-[25%] h-[25%] rounded-full ring-2 ring-white dark:ring-gray-900 ${statusColors[status] || "bg-gray-400"}`} />
            )}
        </div>
    );
}

/**
 * CommonAvatar
 * 
 * Usage:
 * <CommonAvatar 
 *   src="https://example.com/user.jpg" 
 *   alt="John Doe" 
 *   size="md" 
 *   status="online" 
 * />
 * 
 * Props:
 * - src: string (image URL)
 * - alt: string (default: "User")
 * - size: "sm" | "md" | "lg" | "xl" (default: "md")
 * - status: "online" | "offline" | "busy" | "away" (optional)
 * - className: string
 */
