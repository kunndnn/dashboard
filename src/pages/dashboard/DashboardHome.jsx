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

import Graph from "@/components/dashboard/Graph";
import StatsCard from "@/components/dashboard/StatsCard";
import { dashboardData } from "@/store/dashboardStore";
import { useEffect, useMemo } from "react";

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
    const getDashboardData = dashboardData((s) => s.getDashboardData);
    const data = dashboardData((s) => s.data);
    useEffect(() => {
        getDashboardData();
    }, [])
    console.log({ data });
    // ===== Stats Cards Data =====
    const stats = [
        { title: "Total Users", value: data?.userCount ?? 0, color: "blue" },
        { title: "Active Users", value: data?.activeUserCount ?? 0, color: "green" },
        { title: "Total Messages", value: data?.chatCount ?? 0, color: "purple" },
    ];
    const chatStats = useMemo(() => data?.chatStats, [data?.chatStats]);
    const userStats = useMemo(() => data?.userStats, [data?.userStats]);

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

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, i) => (
                    <StatsCard key={i} {...item} />
                ))}
            </div>

            {/* CHARTS SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                <Graph title="User Stats" type="line" data={chatStats} />
                <Graph title="User Stats" type="bar" data={userStats} />
            </div>

        </div>
    );
};

export default DashboardHome;
