export default function CommonTable({ columns, data, className = "" }) {
    return (
        <div className={`overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 ${className}`}>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className="px-6 py-3">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                            >
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex} className="px-6 py-4">
                                        {col.render ? col.render(row) : row[col.accessor]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="px-6 py-8 text-center text-gray-500">
                                No data available
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
 * const columns = [
 *   { header: "Name", accessor: "name" },
 *   { header: "Role", render: (row) => <Badge label={row.role} /> }
 * ];
 * 
 * <CommonTable columns={columns} data={users} />
 * 
 * Props:
 * - columns: Array<{
 *     header: string,
 *     accessor?: string,
 *     render?: (row: any) => ReactNode
 *   }>
 * - data: Array<any>
 * - className: string
 */
