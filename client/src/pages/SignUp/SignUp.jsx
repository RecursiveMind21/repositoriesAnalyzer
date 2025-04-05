export default function SignUp(){
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Graphic Section - 25% */}
            <div className="w-full md:w-1/4 bg-primary-700 p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="z-10 relative">
                    <h1 className="text-white text-4xl font-bold mb-6">GitHub Repo Insights</h1>
                    <p className="text-white/90 text-lg mb-8">
                        Gain valuable insights into your repositories with our powerful analysis tools.
                    </p>
                </div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-600 rounded-full opacity-70" />
                <div className="absolute top-10 right-10 w-40 h-40 bg-primary-600 rounded-full opacity-50" />
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary-800 rounded-full opacity-30" />
            </div>

            {/* Right Login Section - 75% */}
            <div className="w-full md:w-3/4 p-8 md:p-12 flex items-center justify-center bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="mb-10 text-center">
                        <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
                        <p className="text-gray-500 mt-2">Please enter your credentials to access your account</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="github" className="block text-sm font-medium text-gray-700">
                                GitHub Username
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="text-gray-700"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    id="github"
                                    placeholder="johndoe"
                                    className="flex-grow px-4 py-2 rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="terms"
                                type="checkbox"
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded cursor-pointer"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                I agree to the{" "}
                                <a
                                    href="https://webcrumbs.cloud/placeholder"
                                    className="text-primary-600 hover:text-primary-800 font-medium"
                                >
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://webcrumbs.cloud/placeholder"
                                    className="text-primary-600 hover:text-primary-800 font-medium"
                                >
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] font-medium"
                        >
                            Create Account
                        </button>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <a
                                    href="https://webcrumbs.cloud/placeholder"
                                    className="font-medium text-primary-600 hover:text-primary-800 transition-colors"
                                >
                                    Sign in
                                </a>
                            </p>
                        </div>

                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gradient-to-br from-primary-100 to-primary-50 text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-3">
                                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                                    <i className="fa-brands fa-github text-xl mr-2"></i>
                                    GitHub
                                </button>
                                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                                    <i className="fa-brands fa-google text-xl mr-2"></i>
                                    Google
                                </button>
                                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                                    <i className="fa-brands fa-linkedin text-xl mr-2"></i>
                                    LinkedIn
                                </button>
                            </div>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-600">
                        Already have an account?
                        <a
                            href="/login"
                            className="font-medium text-primary-600 hover:text-primary-500 hover:underline ml-1 transition"
                        >
                            Login now
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
