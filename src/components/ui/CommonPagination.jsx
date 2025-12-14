import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CommonPagination({
    currentPage,
    totalPages,
    onPageChange,
    className = ""
}) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    // Logic to show a subset of pages could be added here for large page counts
    // For now, simple list

    return (
        <nav className={`flex items-center justify-center space-x-2 mt-4 ${className}`}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft size={16} />
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`
                        px-3 py-1 rounded-lg border text-sm font-medium transition-colors
                        ${currentPage === page
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
                        }
                    `}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight size={16} />
            </button>
        </nav>
    );
}

/**
 * CommonPagination
 * 
 * Usage:
 * <CommonPagination 
 *   currentPage={1} 
 *   totalPages={10} 
 *   onPageChange={(page) => setPage(page)} 
 * />
 * 
 * Props:
 * - currentPage: number
 * - totalPages: number
 * - onPageChange: function (page: number) => void
 * - className: string
 */
