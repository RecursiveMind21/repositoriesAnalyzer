export default function LineChart({ chartUrl }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-4">Activity Trends</h3>
            <img
                src={chartUrl}
                alt="Activity Trends Chart"
                className="w-full h-64 object-contain"
                onError={(e) => {
                    e.target.src = '/fallback-chart.png';
                    e.target.alt = 'Chart unavailable';
                }}
            />
            <p className="text-sm text-gray-500 mt-2">Monthly issue tracking trends</p>
        </div>
    );
}