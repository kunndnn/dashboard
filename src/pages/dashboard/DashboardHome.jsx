import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

import Graph from "../../components/Graph";
import StatsCard from "../../components/StatsCard";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Tooltip,
    Legend
);

const DashboardHome = () => {

    // ===== Stats Cards Data =====
    const stats = [
        { title: "Total Users", value: "12,450", color: "blue" },
        { title: "New Orders", value: "1,280", color: "green" },
        { title: "Revenue", value: "₹4,50,000", color: "purple" },
        { title: "Pending Tickets", value: "32", color: "orange" },
    ];

    // ===== Line Chart Data =====
    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "User Growth",
                data: [300, 600, 800, 1200, 1500, 2000],
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.3)",
                tension: 0.4
            },
        ],
    };

    // ===== Bar Chart Data =====
    const barData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
            {
                label: "Daily Sales",
                data: [12000, 19000, 15000, 22000, 17000, 25000],
                backgroundColor: "#10b981",
                borderRadius: 6,
            },
        ],
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, i) => (
                    <StatsCard key={i} {...item} />
                ))}
            </div>

            {/* CHARTS SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                <Graph title="User Growth" type="line" data={lineData} />
                <Graph title="Daily Sales" type="bar" data={barData} />
            </div>

        </div>
    );
};

export default DashboardHome;
