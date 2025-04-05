export default function Footer(){
    return (

        <footer className="bg-gray-50 py-12 px-12 mt-16 border-t border-gray-200 flex flex-col items-center justify-center">
            <div className="mb-6 flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <h2 className="text-xl font-bold text-gray-800">GitInsight</h2>
            </div>
            <p className="text-gray-600 mb-6 text-center">
                Powerful GitHub repository analytics platform to help developers and teams gain valuable
                insights.
            </p>
            <div className="flex space-x-4">
                <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                    <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                    <i className="fa-brands fa-twitter text-xl"></i>
                </a>
                <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="text-gray-400 hover:text-black transition-colors duration-300"
                >
                    <i className="fa-brands fa-github text-xl"></i>
                </a>
                <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                    <i className="fa-brands fa-facebook text-xl"></i>
                </a>
            </div>
        </footer>  
    )
}