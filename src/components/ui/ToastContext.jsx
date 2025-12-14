import { createContext, useContext, useState, useCallback } from "react";
import { X, CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = "info", duration = 3000) => {
        const id = Date.now().toString();
        setToasts((prev) => [...prev, { id, message, type }]);

        if (duration) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    // Helper functions
    const toast = {
        success: (msg, duration) => addToast(msg, "success", duration),
        error: (msg, duration) => addToast(msg, "error", duration),
        info: (msg, duration) => addToast(msg, "info", duration),
        warning: (msg, duration) => addToast(msg, "warning", duration),
    };

    return (
        <ToastContext.Provider value={toast}>
            {children}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
                {toasts.map((t) => (
                    <div
                        key={t.id}
                        className={`
                            pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-sm font-medium text-white min-w-[300px] animate-[slideIn_0.3s_ease]
                            ${t.type === "success" ? "bg-green-600" : ""}
                            ${t.type === "error" ? "bg-red-600" : ""}
                            ${t.type === "info" ? "bg-blue-600" : ""}
                            ${t.type === "warning" ? "bg-yellow-600" : ""}
                        `}
                    >
                        {t.type === "success" && <CheckCircle size={18} />}
                        {t.type === "error" && <XCircle size={18} />}
                        {t.type === "info" && <Info size={18} />}
                        {t.type === "warning" && <AlertCircle size={18} />}

                        <span className="flex-1">{t.message}</span>

                        <button
                            onClick={() => removeToast(t.id)}
                            className="p-1 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}

/**
 * ToastContext & useToast
 * 
 * Usage:
 * 1. Wrap your app with ToastProvider in main.jsx/App.jsx:
 *    <ToastProvider>
 *      <App />
 *    </ToastProvider>
 * 
 * 2. Use the hook in any component:
 *    const toast = useToast();
 *    
 *    const handleClick = () => {
 *      toast.success("Operation successful!");
 *      toast.error("Something went wrong.");
 *    };
 * 
 * Methods:
 * - toast.success(message, duration?)
 * - toast.error(message, duration?)
 * - toast.warning(message, duration?)
 * - toast.info(message, duration?)
 */
