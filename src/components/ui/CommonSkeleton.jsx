export default function CommonSkeleton({ 
    width = "100%", 
    height = "20px", 
    variant = "text", // text, circular, rectangular
    className = "" 
}) {
    const baseClass = "bg-gray-200 dark:bg-gray-700 animate-pulse";
    
    let borderRadius = "rounded";
    if (variant === "circular") borderRadius = "rounded-full";
    if (variant === "rectangular") borderRadius = "rounded-md";

    return (
        <div 
            className={`${baseClass} ${borderRadius} ${className}`} 
            style={{ width, height }}
        />
    );
}

/**
 * CommonSkeleton
 * 
 * Usage:
 * <CommonSkeleton width="100px" height="20px" variant="text" />
 * <CommonSkeleton width="40px" height="40px" variant="circular" />
 * 
 * Props:
 * - width: string (default: "100%")
 * - height: string (default: "20px")
 * - variant: "text" | "circular" | "rectangular" (default: "text")
 * - className: string
 */
