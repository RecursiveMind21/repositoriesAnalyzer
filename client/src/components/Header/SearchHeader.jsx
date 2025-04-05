// src/components/SearchHeader/SearchHeader.jsx
import { Link } from 'react-router-dom';

export default function SearchHeader() {
    return (
        <header className="flex items-center justify-between bg-white px-8 py-4 shadow-md">
            {/* Site Logo / Name */}
            <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                    RepoAnalyzer
                </Link>
            </div>
            {/* Navigation: Home Button Only */}
            <nav>
                <Link
                    to="/"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                    Home
                </Link>
            </nav>
        </header>
    );
}
