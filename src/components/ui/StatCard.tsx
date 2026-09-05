interface StatCardProps {
    value: string;
    label: string;
}

function StatCard({ value, label }: StatCardProps) {
    return (
        <div className="bg-gray-800/20 border border-gray-700 rounded-lg p-4">
            <p className="text-2xl font-bold text-white">{value}</p>
            <p className="text-sm text-gray-400">{label}</p>
        </div>
    )
}

export default StatCard;