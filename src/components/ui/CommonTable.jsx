import { COMMON } from "@/constants";

export default function CommonTable({
    columns,
    data,
    renderRow,
    keyExtractor = (item, index) => index,
    className = ""
}) {
    return (
        <div className={`overflow-x-auto bg-white dark:bg-black shadow rounded-xl border border-gray-200 dark:border-gray-800 ${className}`}>
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 uppercase text-xs">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} className="px-6 py-3 font-semibold tracking-wider">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                    {data && data.length > 0 ? (
                        data.map((item, index) => (
                            <tr
                                key={keyExtractor(item, index)}
                                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-150"
                            >
                                {renderRow(item, index)}
                            </tr>
                        ))
                    ) : (
                        <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
                                >
                                    {COMMON?.NO_DATA || "No data available"}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

/**
 * CommonTable
 * 
 * Usage:
 * const columns = ["Name", "Role", "Actions"];
 * 
 * const renderRow = (item, index) => (
 *   <>
 *     <td className="px-6 py-4">{item.name}</td>
 *     <td className="px-6 py-4">{item.role}</td>
 *     <td className="px-6 py-4"><button>Edit</button></td>
 *   </>
 * );
 * 
 * <CommonTable 
 *   columns={columns} 
 *   data={users} 
 *   renderRow={renderRow} 
 * />
 * 
 * Props:
 * - columns: Array<string> (Header labels)
 * - data: Array<any> (Data items)
 * - renderRow: (item, index) => ReactNode (Function to render table cells (td))
 * - keyExtractor: (item, index) => string (optional, for unique keys)
 * - className: string (optional)
 */
