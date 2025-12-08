export function Tabs({ tabs, active, onChange }) {
    return (
        <div className="flex gap-3">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={`px-3 py-2 rounded-lg ${active === tab ? "bg-blue-600 text-white" : "bg-gray-100"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
