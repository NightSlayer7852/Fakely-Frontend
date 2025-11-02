import { useState } from 'react';
import useLogin from '../handlers/useLogin.js';
import useSignup from '../handlers/useSignup.js';

function Auth() {
    const [activeTab, setActiveTab] = useState('login');
    const { isLoading, error, username, setUsername, password, setPassword, handleLogin } = useLogin();
    const { isLoading: isSignupLoading, error: signupError, username: signupUsername, setUsername: setSignupUsername, email, setEmail, password: signupPassword, setPassword: setSignupPassword, password2, setPassword2, handleSignup } = useSignup();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <div className="flex border-b border-gray-200 mb-6">
                    <button
                        className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'login'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('login')}
                    >
                        Sign In
                    </button>
                    <button
                        className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'signup'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveTab('signup')}
                    >
                        Sign Up
                    </button>
                </div>

                {activeTab === 'login' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label htmlFor="login-username" className="block text-sm font-medium text-gray-700 mb-1">
                                    Username:
                                </label>
                                <input
                                    type="text"
                                    id="login-username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    id="login-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>
                            {error && <p className="text-red-600 text-sm mt-2">Login failed. Please try again.</p>}
                        </form>
                    </div>
                )}

                {activeTab === 'signup' && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
                        <form onSubmit={handleSignup} className="space-y-4">
                            <div>
                                <label htmlFor="signup-username" className="block text-sm font-medium text-gray-700 mb-1">
                                    Username:
                                </label>
                                <input
                                    type="text"
                                    id="signup-username"
                                    value={signupUsername}
                                    onChange={(e) => setSignupUsername(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="signup-email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    id="signup-password"
                                    value={signupPassword}
                                    onChange={(e) => setSignupPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="signup-password2" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password:
                                </label>
                                <input
                                    type="password"
                                    id="signup-password2"
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSignupLoading}
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isSignupLoading ? 'Signing up...' : 'Sign Up'}
                            </button>
                            {signupError && <p className="text-red-600 text-sm mt-2">Signup failed. Please try again.</p>}
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Auth;