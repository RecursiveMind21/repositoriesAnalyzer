// src/pages/Search/Search.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchHeader from '../../components/Header/SearchHeader';


export default function Search() {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/analysis', { state: { url } });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col">
            <SearchHeader />

            <div className="flex-1 flex items-center justify-center px-4">
                <div className="bg-white rounded-xl shadow-2xl p-10 max-w-3xl w-full">
                    <h1 className="text-5xl font-bold text-gray-800 text-center mb-4">
                        GitInsight
                    </h1>
                    <p className="text-gray-600 text-lg text-center mb-8">
                        Enter a GitHub repository URL below and generate actionable insights
                        on trends, collaboration, and issue tracking.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">
                                GitHub Repository URL
                            </label>
                            <input
                                type="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                placeholder="https://github.com/username/repo"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg px-6 py-3 transition-colors"
                        >
                            Generate Insights
                        </button>
                    </form>
                    {/* Analysis Sections */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
                            <h3 className="text-xl font-semibold mb-2">Trend Analysis</h3>
                            <p className="text-gray-600 text-sm">
                                Visualize commit and issue trends over time.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
                            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                            <p className="text-gray-600 text-sm">
                                Analyze contributor impact and engagement.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
                            <h3 className="text-xl font-semibold mb-2">Issue Tracking</h3>
                            <p className="text-gray-600 text-sm">
                                Monitor issues, resolutions, and response times.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-500 text-sm">
                        <p>
                            Tip: Use repositories with at least three months of history and
                            ensure they are public for best analysis results.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
