import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeRepository } from '../../services/api';

export default function Search() {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const analysisData = await analyzeRepository(url);
            navigate('/analysis', { state: analysisData });
        } catch (error) {
            console.error('Analysis failed:', error);
            alert('Failed to analyze repository');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            GitHub Repository URL
                        </label>
                        <input
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://github.com/username/repo"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                        {loading ? 'Analyzing...' : 'Analyze Repository'}
                    </button>
                </form>
            </div>
        </div>
    );
}