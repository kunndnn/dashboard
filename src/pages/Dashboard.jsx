import { Link } from 'react-router-dom';
import { Store, Layers, Component } from 'lucide-react';
import { clsx } from 'clsx';

export const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DashboardCard
                to="/small"
                title="Small Project"
                description="Global store for simple state like counters and themes."
                icon={<Component className="text-blue-600" size={32} />}
                color="bg-blue-50 border-blue-100"
            />
            <DashboardCard
                to="/medium"
                title="Medium Project"
                description="Complex interactions, async data fetching, and state filtering."
                icon={<Layers className="text-purple-600" size={32} />}
                color="bg-purple-50 border-purple-100"
            />
            <DashboardCard
                to="/large"
                title="Large Project"
                description="Scalable architecture using the Slice Pattern for modular stores."
                icon={<Store className="text-green-600" size={32} />}
                color="bg-green-50 border-green-100"
            />
        </div>
    );
};

const DashboardCard = ({ to, title, description, icon, color }) => (
    <Link to={to} className={clsx("p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl", color, "bg-white")}>
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </Link>
);
