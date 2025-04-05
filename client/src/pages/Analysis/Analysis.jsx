import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Chart from 'react-apexcharts';

export default function Analysis() {
    const [analysisData, setAnalysisData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const location = useLocation();

    // Chart configuration
    const chartOptions = {
        trendChart: {
            options: {
                chart: {
                    type: 'line',
                    height: 350,
                    toolbar: { show: false },
                },
                xaxis: {
                    type: 'datetime',
                    title: { text: 'Timeline' },
                },
                yaxis: { title: { text: 'Activity Count' } },
                stroke: { curve: 'smooth' },
                colors: ['#6a0dad', '#10b981'],
            },
        },
        pieChart: {
            options: {
                chart: { type: 'donut' },
                labels: ['Open Issues', 'Closed Issues'],
                colors: ['#6a0dad', '#10b981'],
                legend: { position: 'bottom' },
            },
        },
    };

    useEffect(() => {
        const fetchAnalysis = async () => {
            try {
                if (!location.state?.url) {
                    throw new Error('No repository URL provided');
                }

                const response = await fetch(`/api/analyze?url=${encodeURIComponent(location.state.url)}`);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch analysis');
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                setAnalysisData(data);
                setError('');
            } catch (err) {
                setError(err.message);
                setAnalysisData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalysis();
    }, [location.state]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center p-8 max-w-2xl">
                    <div className="text-red-600 text-2xl mb-4">⚠️ Analysis Error</div>
                    <p className="text-gray-700 mb-4">{error}</p>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Header Section with Home Button */}
            <div className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        {analysisData.full_name}
                    </h1>
                    <a
                        href={location.state.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:underline"
                    >
                        View on GitHub
                    </a>
                </div>
                {/* Home button at the top-right corner */}
                <Link
                    to="/"
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                >
                    Home
                </Link>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-gray-500 font-medium">Stars</h3>
                        <span className="material-symbols-outlined text-yellow-500">star</span>
                    </div>
                    <div className="text-3xl font-bold">{analysisData.stargazers_count}</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-gray-500 font-medium">Forks</h3>
                        <span className="material-symbols-outlined text-blue-500">fork_right</span>
                    </div>
                    <div className="text-3xl font-bold">{analysisData.forks_count}</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-gray-500 font-medium">Open Issues</h3>
                        <span className="material-symbols-outlined text-red-500">error</span>
                    </div>
                    <div className="text-3xl font-bold">{analysisData.open_issues_count}</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-gray-500 font-medium">Health Score</h3>
                        <span className="material-symbols-outlined text-green-500">monitor_heart</span>
                    </div>
                    <div className="text-3xl font-bold text-purple-600">
                        {analysisData.healthScore}/100
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 max-w-7xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Activity Trends</h3>
                    <Chart
                        options={chartOptions.trendChart.options}
                        series={[
                            {
                                name: 'Issues Opened',
                                data: Object.entries(analysisData.issueTrends?.openedPerMonth || {})
                                    .map(([date, count]) => ({ x: new Date(date), y: count })),
                            },
                            {
                                name: 'Issues Closed',
                                data: Object.entries(analysisData.issueTrends?.closedPerMonth || {})
                                    .map(([date, count]) => ({ x: new Date(date), y: count })),
                            },
                        ]}
                        type="line"
                        height={350}
                    />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Issue Distribution</h3>
                    <Chart
                        options={chartOptions.pieChart.options}
                        series={[
                            analysisData.issues.total - analysisData.issues.closed,
                            analysisData.issues.closed,
                        ]}
                        type="donut"
                        height={350}
                    />
                </div>
            </div>

            {/* Contributors Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm max-w-7xl mx-auto">
                <h3 className="text-lg font-semibold mb-6">Top Contributors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {analysisData.contributors.map((contributor, index) => (
                        <div
                            key={index}
                            className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <img
                                src={contributor.avatar_url}
                                alt={contributor.login}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="font-medium">{contributor.login}</h4>
                                <p className="text-gray-600">
                                    {contributor.contributions} contributions
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
