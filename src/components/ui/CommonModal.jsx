import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function CommonModal({
    open,
    onClose,
    title,
    children,
    size = "md", // sm, md, lg, xl, full
    footer,
    closeOnOutsideClick = true
}) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    if (!open) return null;

    const sizes = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        full: "max-w-full m-4"
    };

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease]">
            {/* Backdrop click handler */}
            <div 
                className="absolute inset-0"
                onClick={closeOnOutsideClick ? onClose : undefined}
            />

            <div className={`relative w-full ${sizes[size] || sizes.md} bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex flex-col max-h-[90vh]`}>

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-4 overflow-y-auto">
                    {children}
                </div>

                {/* Footer (Optional) */}
                {footer && (
                    <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 rounded-b-xl flex justify-end gap-2">
                        {footer}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}

/**
 * CommonModal
 * 
 * Usage:
 * <CommonModal 
 *   open={isOpen} 
 *   onClose={() => setIsOpen(false)} 
 *   title="Modal Title"
 *   footer={<button onClick={close}>Close</button>}
 *   size="md"
 * >
 *   <p>Modal content...</p>
 * </CommonModal>
 * 
 * Props:
 * - open: boolean
 * - onClose: function
 * - title: string (optional)
 * - children: ReactNode
 * - size: "sm" | "md" | "lg" | "xl" | "2xl" | "full" (default: "md")
 * - footer: ReactNode (optional)
 * - closeOnOutsideClick: boolean (default: true)
 */
