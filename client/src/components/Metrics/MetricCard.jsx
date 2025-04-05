export default function MetricCard({ title, value, icon, color }) {
    const colorClasses = {
        yellow: 'bg-yellow-100 text-yellow-600',
        blue: 'bg-blue-100 text-blue-600',
        red: 'bg-red-100 text-red-600',
        green: 'bg-green-100 text-green-600'
    }

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex justify-between mb-3">
                <span className="text-gray-500 font-medium">{title}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
            </div>
            <div className="text-3xl font-bold">{value}</div>
        </div>
    )
}