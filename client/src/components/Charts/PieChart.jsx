export default function PieChart({ chartUrl }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-4">Issue Distribution</h3>
            <img
                src={chartUrl}
                alt="Issue Distribution Chart"
                className="w-full h-64 object-contain"
                onError={(e) => {
                    e.target.src = '/fallback-chart.png';
                    e.target.alt = 'Chart unavailable';
                }}
            />
            <p className="text-sm text-gray-500 mt-2">Open vs closed issues ratio</p>
        </div>
    );
}