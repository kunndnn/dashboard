import { capitalize } from '@/utils/helperFun'
import { useCallback, useMemo, useState } from "react";
import { Bar, Line } from "react-chartjs-2"
import CommonSelect from '../ui/CommonSelect';

const Graph = ({ title, type, data }) => {
    const graphType = (type) => type === 'bar' ? <Bar data={barData} /> : <Line data={lineData} />;
    const [currentDuration, setCurrentDuration] = useState('daily');    
    const duration = [
        'daily',
        'weekly',
        'monthly',
        'yearly'
    ];

    // ===== Bar Chart Data =====
    const barData = useMemo(() =>
    (
        {
            labels: data ? data[currentDuration]?.label : [],
            datasets: [
                {
                    label: title,
                    data: data ? data[currentDuration]?.values : [],
                    backgroundColor: "#10b981",
                    borderRadius: 6,
                },
            ],
        }
    ), [currentDuration])

    // ===== Line Chart Data =====
    const lineData =
        useMemo(() => (
            {
                labels: data ? data[currentDuration]?.label : [],
                datasets: [
                    {
                        label: "User Growth",
                        data: data ? data[currentDuration]?.values : [],
                        borderColor: "#3b82f6",
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                        tension: 0.4
                    },
                ],
            }
        ), [currentDuration])
        
    const options = useMemo(() => (
        duration?.map((iteration) => ({ label: `🗓️ ${capitalize(iteration)}`, value: iteration }))
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