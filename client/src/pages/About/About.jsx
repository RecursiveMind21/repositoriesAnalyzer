import AboutHeader from '../../components/Header/AboutHeader';
import Footer from '../../components/Footer/Footer';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <AboutHeader />

            <main className="py-12 px-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About GitInsight</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Powerful GitHub repository analytics platform to help developers and teams gain valuable
                        insights into their code and collaboration.
                    </p>
                </div>

                <section className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                            <p className="text-gray-600 mb-6">
                                GitInsight was created with a simple mission: to provide developers and teams with
                                comprehensive analytics about their GitHub repositories, helping them make
                                data-driven decisions to improve code quality, collaboration, and productivity.
                            </p>
                            <p className="text-gray-600 mb-6">
                                We believe that understanding your codebase trends and team dynamics is essential
                                for continuous improvement and successful project outcomes.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 bg-gray-100 rounded-xl p-6 shadow-lg transform hover:rotate-1 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                alt="GitHub Analytics Dashboard"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                                <span className="material-symbols-outlined text-primary-600 text-3xl">
                                    analytics
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Repository Analytics</h3>
                            <p className="text-gray-600">
                                Get comprehensive analytics about your repositories, including commit frequency,
                                code changes, and contributor statistics.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                                <span className="material-symbols-outlined text-primary-600 text-3xl">people</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Team Collaboration</h3>
                            <p className="text-gray-600">
                                Visualize how your team collaborates, identify bottlenecks, and optimize workflows
                                for better productivity.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                                <span className="material-symbols-outlined text-primary-600 text-3xl">code</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Code Quality Metrics</h3>
                            <p className="text-gray-600">
                                Track code quality metrics over time to identify areas of improvement and ensure
                                sustainable development.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                GitInsight makes it easy to analyze your repositories and gain valuable insights in
                                just a few steps.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-8 md:mb-0 text-center md:text-left flex-1">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Connect</h3>
                                <p className="text-gray-600">Connect your GitHub account and select repositories</p>
                            </div>
                            <div className="mb-8 md:mb-0 text-center md:text-left flex-1">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Analyze</h3>
                                <p className="text-gray-600">
                                    We analyze your data and generate comprehensive reports
                                </p>
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Gain Insights</h3>
                                <p className="text-gray-600">
                                    View actionable insights and make informed decisions
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    )
}