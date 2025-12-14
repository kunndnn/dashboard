import CommonButton from '@/components/ui/CommonButton';
import CommonInput from '@/components/ui/CommonInput'
import CommonTable from '@/components/ui/CommonTable';
import CommonBadge from '@/components/ui/CommonBadge';
import CommonBreadcrumb from '@/components/ui/CommonBreadcrumb';

const Users = () => {
    const columns = ['Sr.', 'Name', 'Email', 'Role', 'Actions'];

    const data = [
        { sr: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { sr: 2, name: "Amit Kumar", email: "amit@example.com", role: "User" },
        { sr: 3, name: "Sara Ali", email: "sara@example.com", role: "Editor" },
        { sr: 4, name: "Michael Lee", email: "michael@example.com", role: "User" },
    ];

    const getRoleBadgeVariant = (role) => {
        switch (role) {
            case 'Admin': return 'primary';
            case 'Editor': return 'warning';
            case 'User': return 'success';
            default: return 'gray';
        }
    };

    const renderRow = (row, index) => (
        <>
            <td className="px-6 py-4 dark:text-gray-300 font-medium">{row.sr}</td>
            <td className="px-6 py-4 dark:text-gray-300">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                        {row.name.charAt(0)}
                    </div>
                    {row.name}
                </div>
            </td>
            <td className="px-6 py-4 dark:text-gray-300">{row.email}</td>
            <td className="px-6 py-4">
                <CommonBadge label={row.role} variant={getRoleBadgeVariant(row.role)} />
            </td>
            <td className="px-6 py-4 flex gap-2">
                <CommonButton
                    type='button'
                    label='Edit'
                    className='px-3 py-1 text-xs'
                />
                <CommonButton
                    type='button'
                    label='Delete'
                    className='px-3 py-1 text-xs'
                    variant='danger'
                />
            </td>
        </>
    );

    return (
        <div className="space-y-6">
            <CommonBreadcrumb />

            <div className="flex justify-between items-center bg-white dark:bg-black p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">All Users</h2>
                <CommonInput
                    type="search"
                    placeholder="Search user..."
                    wrapperClass="max-w-xs"
                    className="!py-2"
                />
            </div>

            <CommonTable
                columns={columns}
                data={data}
                renderRow={renderRow}
            />
        </div>
    );
};

export default Users;
