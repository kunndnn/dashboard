import { Bar, Line } from "react-chartjs-2"

const Graph = ({ title, type, data }) => {
    const graphType = (type) => type === 'bar' ? <Bar data={data} /> : <Line data={data} />;
    
    return (
        <div className="bg-white shadow rounded-xl p-6 border border-gray-100 dark:bg-black dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 mb-3 dark:text-gray-100">
                {title}
            </h2>
            {graphType(type)}
        </div>
    )
}

export default Graph