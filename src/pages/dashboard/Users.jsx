import CommonButton from '../../components/CommonButton';
import CommonInput from '../../components/CommonInput'
import { COMMON } from '../../constants';
const Users = () => {
    const columns = ['Sr.', 'Name', 'Email', 'Role'];

    const data = [
        { sr: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { sr: 2, name: "Amit Kumar", email: "amit@example.com", role: "User" },
        { sr: 3, name: "Sara Ali", email: "sara@example.com", role: "Editor" },
        { sr: 4, name: "Michael Lee", email: "michael@example.com", role: "User" },
    ];

    return (
        <>
            <div className="overflow-x-auto bg-white dark:bg-black shadow rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="flex justify-end p-3 dark:border-white border-t border-l border-r">
                    <CommonInput
                        type="search"
                        placeholder="Search user..."
                        wrapperClass="max-w-xs"
                    />
                </div>

                <table className="min-w-full text-left">

                    {/* Table Head */}
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-200 uppercase text-sm">
                            {columns.map((col, i) => (
                                <th key={i} className="px-6 py-3 font-semibold ">
                                    {col}
                                </th>
                            ))}
                            <th className="px-6 py-3 font-semibold">Actions</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {data.length > 0 ? (
                            data.map((row, index) => (
                                <tr
                                    key={index}
                                    className="border-t dark:border-white hover:bg-gray-50 dark:hover:bg-gray-700 transition dark:bg-gray-900"
                                >
                                    <td className="px-6 py-4 dark:text-white">{row.sr}</td>
                                    <td className="px-6 py-4 dark:text-white">{row.name}</td>
                                    <td className="px-6 py-4 dark:text-white">{row.email}</td>
                                    <td className="px-6 py-4 dark:text-white">{row.role}</td>

                                    {/* Action Buttons */}
                                    <td className="px-6 py-4 flex gap-3">
                                        <CommonButton type='button' label='Edit' className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600' variant='' />
                                        <CommonButton type='button' label='Delete' className='px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600' variant='danger' />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length + 1}
                                    className="text-center py-6 text-gray-500"
                                >
                                    {COMMON.NO_DATA}
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default Users;
