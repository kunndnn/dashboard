import { capitalize } from '@/utils/helperFun'
import { useCallback, useMemo, useState } from "react";
import { Bar, Line } from "react-chartjs-2"
import CommonSelect from '../ui/CommonSelect';

const Graph = ({ title, type, data }) => {
        // ===== Bar Chart Data =====
    const barData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: title,
                data: [12000, 19000, 15000, 22000, 17000, 25000],
                backgroundColor: "#10b981",
                borderRadius: 6,
            },
        ],
    };
    const graphType = (type) => type === 'bar' ? <Bar data={barData} /> : <Line data={barData} />;
    const [currentDuration, setCurrentDuration] = useState('daily');
    const duration = [
        'daily',
        'weekly',
        'monthly',
        'yearly'
    ];
    const options = useMemo(() => (
        duration?.map((iteration) => ({ label: capitalize(iteration), value: iteration }))
    ), [duration])

    const handleChange = useCallback(setCurrentDuration, []);
    const selectTag = useMemo(() => (
        <CommonSelect options={options} value={currentDuration} onChange={handleChange} />
    ), [options, currentDuration, handleChange])

    return (
        <div className="bg-white shadow rounded-xl p-6 border border-gray-100 dark:bg-black dark:border-gray-800">
            {selectTag}
            <h2 className="text-lg font-semibold text-gray-700 mb-3 dark:text-gray-100">
                {title}
            </h2>
            {graphType(type)}
        </div>
    )
}

export default Graph