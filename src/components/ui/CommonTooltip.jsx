import { useState } from "react";

export default function CommonTooltip({
    content,
    children,
    position = "top", // top, bottom, left, right
    className = ""
}) {
    const [isVisible, setIsVisible] = useState(false);

    const positions = {
        top: "-top-2 left-1/2 -translate-x-1/2 -translate-y-full mb-2",
        bottom: "-bottom-2 left-1/2 -translate-x-1/2 translate-y-full mt-2",
        left: "-left-2 top-1/2 -translate-y-1/2 -translate-x-full mr-2",
        right: "-right-2 top-1/2 -translate-y-1/2 translate-x-full ml-2",
    };

    return (
        <div 
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className={`absolute z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-sm whitespace-nowrap ${positions[position] || positions.top}`}>
                    {content}
                    {/* Arrow (optional, simplistic) */}
                </div>
            )}
        </div>
    );
}

/**
 * CommonTooltip
 * 
 * Usage:
 * <CommonTooltip content="Edit Item" position="top">
 *   <button>Edit</button>
 * </CommonTooltip>
 * 
 * Props:
 * - content: string (tooltip text)
 * - children: ReactNode (trigger element)
 * - position: "top" | "bottom" | "left" | "right" (default: "top")
 * - className: string
 */
