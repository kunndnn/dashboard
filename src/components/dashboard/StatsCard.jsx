const StatsCard = ({ title, value, color }) => {
    return (
        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-100 dark:bg-gray-800 hover:shadow-lg transition">
            <p className="text-gray-500 text-sm dark:text-gray-200">{title}</p>

            {/* Dynamic color using inline style (best for Tailwind restrictions) */}
            <p
                className="text-lg xl:text-3xl font-semibold mt-2"
                style={{ color: color }}
            >
                {value}
            </p>
        </div>
    );
};

export default StatsCard;
