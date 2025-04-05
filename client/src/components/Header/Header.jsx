// src/components/Header/Header.jsx
export default function Header() {
    return (
        <header className="bg-gradient-to-b from-gray-50 to-white text-primary-600 py-6 px-10 relative">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <svg
                        className="w-10 h-10 text-primary-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="rgba(79, 70, 229, 0.1)"
                        ></path>
                        <path
                            d="M12 22V12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M12 12L21 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M12 12L3 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <h1 className="text-2xl font-bold text-gray-900">GitInsight</h1>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <a href="https://webcrumbs.cloud/placeholder" className="font-medium hover:text-primary-600 transition-colors">Features</a>
                    <a href="/about" className="font-medium hover:text-primary-600 transition-colors">About</a>
                </nav>
                <div className="flex items-center gap-4">
                    <a href="/login" className="px-4 py-2 font-medium hover:text-primary-600 transition-colors">Login</a>
                    <a href="/signup" className="px-5 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md">Sign Up</a>
                </div>
                <button className="md:hidden text-gray-700 hover:text-primary-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}