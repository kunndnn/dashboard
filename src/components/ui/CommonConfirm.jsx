import { createPortal } from "react-dom";
import CommonButton from "./CommonButton";
export default function CommonConfirm({
    open,
    title = "Are you sure?",
    message = "Do you want to continue?",
    onConfirm,
    onCancel,
}) {
    if (!open) return null;

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-[90%] max-w-sm text-gray-900 dark:text-gray-100 animate-[fadeIn_0.2s_ease]">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-sm mb-5">{message}</p>

                <div className="flex justify-end gap-3">
                    <CommonButton onClick={onCancel} label="Cancel" className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"/>
                    <CommonButton onClick={onConfirm} label="Confirm" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700" />
                </div>
            </div>
        </div>,
        document.body
    );
}

/**
 * CommonConfirm
 * 
 * Usage:
 * <CommonConfirm 
 *   open={isOpen} 
 *   title="Delete Item" 
 *   message="Are you sure?" 
 *   onConfirm={handleConfirm} 
 *   onCancel={() => setIsOpen(false)} 
 * />
 * 
 * Props:
 * - open: boolean (visibility)
 * - title: string (default: "Are you sure?")
 * - message: string (default: "Do you want to continue?")
 * - onConfirm: function
 * - onCancel: function
 */