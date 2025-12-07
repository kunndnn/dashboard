export default function CommonCard({ children, className = "" }) {
    return (
        <div
            className={`bg-white shadow-md rounded-xl p-4 border border-gray-200 dark:bg-gray-900 ${className}`}
        >
            {children}
        </div>
    );
}

// usage
// <CommonCard className="max-w-sm">
//   <h2 className="text-lg font-bold">Card Title</h2>
//   <p>This is card content.</p>
// </CommonCard>
