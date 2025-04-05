// src/pages/Home/Home.jsx
import Header from '../../components/Header/Header';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="max-w-7xl mx-auto px-10 py-16">
                <section className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full font-medium text-sm">
                            Powerful Repository Analysis Tool
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                            Unlock insights from your <span className="text-primary-600">code repositories</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-lg">
                            RepoAnalyzer helps teams understand their codebase, identify patterns, and improve code quality with advanced analytics and visualization tools.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="/search"
                                className="px-8 py-3 bg-primary-600 text-white font-medium rounded-md text-center hover:bg-primary-700 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                Analyze
                            </a>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="relative rounded-2xl bg-gradient-to-br from-white to-gray-100 shadow-xl p-6 border border-gray-200 transition-all transform hover:-translate-y-2 hover:shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="text-xs text-gray-500">RepoAnalyzer Dashboard</div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-1/2 h-24 bg-primary-100 rounded-md flex items-center justify-center group hover:bg-primary-200 transition-colors">
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-primary-700 group-hover:text-primary-800">43%</span>
                                            <p className="text-xs text-gray-600">Code Coverage</p>
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-24 bg-blue-100 rounded-md flex items-center justify-center group hover:bg-blue-200 transition-colors">
                                        <div className="text-center">
                                            <span className="text-2xl font-bold text-blue-700 group-hover:text-blue-800">87</span>
                                            <p className="text-xs text-gray-600">Issues Fixed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-48 bg-white rounded-md p-3 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-medium text-sm">Commit Activity</h4>
                                        <div className="text-xs text-gray-500">Last 30 days</div>
                                    </div>
                                    <div className="h-36 flex items-end gap-1">
                                        <div className="w-full bg-primary-200 hover:bg-primary-300 transition-all rounded-sm cursor-pointer relative group" style={{ height: '30%' }}>
                                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded transition-opacity">30 commits</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">How to use guide</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our platform helps thousands of developers analyze and improve their code every day.
                        </p>
                    </div>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <span className="text-xl font-bold text-primary-600">1</span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Paste Repository URL</h4>
                            <p className="text-gray-600 mb-4">
                                Enter your GitHub repository URL in the analysis field. We support both public and private repositories.
                            </p>
                            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-gray-400">https://github.com/</span>
                                    <span className="font-medium">username/repo-name</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <span className="text-xl font-bold text-primary-600">2</span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Select Analysis Options</h4>
                            <p className="text-gray-600 mb-4">
                                Choose which metrics and insights you want to generate from your codebase.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Code quality metrics</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Contribution patterns</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Security vulnerabilities</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                <span className="text-xl font-bold text-primary-600">3</span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Review Insights</h4>
                            <p className="text-gray-600 mb-4">
                                Explore detailed analytics and visualizations of your repository to identify areas for improvement.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Code Coverage</span>
                                    <div className="flex items-center">
                                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                            <div className="h-full bg-primary-600" style={{ width: '43%' }}></div>
                                        </div>
                                        <span className="font-medium">43%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Technical Debt</span>
                                    <div className="flex items-center">
                                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                            <div className="h-full bg-yellow-500" style={{ width: '68%' }}></div>
                                        </div>
                                        <span className="font-medium">Medium</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Code Complexity</span>
                                    <div className="flex items-center">
                                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                                            <div className="h-full bg-green-500" style={{ width: '22%' }}></div>
                                        </div>
                                        <span className="font-medium">Low</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}