import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used inside <ToastProvider>");
    }
    return context;
};

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = "success") => {
        const id = Date.now();

        setToasts((prev) => {
            // Remove existing toast with same message
            const filtered = prev.filter((t) => t.message !== message);

            // Add new toast
            return [...filtered, { id, message, type }];
        });

        // auto remove
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            <div className="fixed top-4 right-4 space-y-3 z-50">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`
              px-4 py-2 rounded-lg shadow-md text-white 
              ${toast.type === "error" ? "bg-red-600" : "bg-green-600"}
            `}
                    >
                        {toast.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}


// usage
// import { ToastProvider } from "./ToastContext";

// export default function App() {
//   return (
//     <ToastProvider>
//       <YourAppComponents />
//     </ToastProvider>
//   );
// }
// import { useToast } from "./ToastContext";

// const { showToast } = useToast();

// <button onClick={() => showToast("Saved Successfully!")}>
//   Show Success
// </button>

// <button onClick={() => showToast("Something went wrong!", "error")}>
//   Show Error
// </button>
