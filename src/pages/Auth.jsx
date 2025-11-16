import { useEffect, useState } from 'react';
import useLogin from '../handlers/useLogin';
import useSignup from '../handlers/useSignup';
import ToggleButton from '../components/ui/ToggleButton';
import BackgroundBeamsWithCollision from '../components/ui/BackgroundBeamsWithCollision';

function Auth() {
    const [activeTab, setActiveTab] = useState('login');

    const { isLoading, error, username, setUsername, password, setPassword, handleLogin } = useLogin();
    const { isLoading: isSignupLoading, error: signupError, username: signupUsername, setUsername: setSignupUsername, email, setEmail, password: signupPassword, setPassword: setSignupPassword, password2, setPassword2, handleSignup } = useSignup();

    return (
        
        <div className="relative flex items-center justify-center min-h-screen bg-base-100 overflow-hidden">
            <BackgroundBeamsWithCollision className="min-h-screen container items-center justify-center bg-base-100">
            <div className="absolute top-4 right-4 z-50">
                <ToggleButton />
            </div>
            <div className="relative w-full max-w-md bg-secondary rounded-2xl shadow-2xl p-8 motion-preset-expand">
                <div className="flex border-b border-neutral mb-8">
                    <button
                        className={`flex-1 py-3 px-4 text-center font-semibold transition-all duration-300 ${activeTab === 'login'
                            ? 'text-secondary-content border-b-2 border-neutral'
                            : 'text-secondary-content hover:text-primary-content'
                            }`}
                        onClick={() => setActiveTab('login')}
                    >
                        Sign In
                    </button>
                    <button
                        className={`flex-1 py-3 px-4 text-center font-semibold transition-all duration-300 ${activeTab === 'signup'
                            ? 'text-secondary-content border-b-2 border-neutral'
                            : 'text-secondary-content hover:text-primary-content'
                            }`}
                        onClick={() => setActiveTab('signup')}
                    >
                        Sign Up
                    </button>
                </div>

                {activeTab === 'login' && (
                    <div className="animate-fadeIn space-y-2">
                        <h1 className="text-primary-content text-3xl font-bold">Welcome Back</h1>
                        <p className="text-secondary-content">Sign in to continue to your account</p>
                        <form onSubmit={handleLogin} className="space-y-5 flex flex-col items-center ">
                            <div className='w-full'>
                                <input
                                    type="text"
                                    id="login-username"
                                    value={username}
                                    placeholder='username'
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="input input-neutral"
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <input
                                    type="password"
                                    id="login-password"
                                    value={password}
                                    placeholder='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input input-neutral"
                                    required
                                />
                            </div>
                            
                            <button type="submit" disabled={isLoading} className="btn btn-base ">{isLoading ? 'Logging in...' : 'Sign In'}</button>
                            
                        </form>
                    </div>
                )}

                {activeTab === 'signup' && (
                    <div className="animate-fadeIn">
                        <h2 className="text-primary-content text-3xl font-bold">Create Account</h2>
                        <p className="text-secondary-content">Join us and start your journey</p>
                        <form onSubmit={handleSignup} className="space-y-5 flex flex-col items-center">
                            <div className='w-full'>
                                <input
                                    type="text"
                                    id="signup-username"
                                    value={signupUsername}
                                    placeholder='username'
                                    onChange={(e) => setSignupUsername(e.target.value)}
                                    className="input input-md input-neutral"
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <input
                                    type="email"
                                    id="signup-email"
                                    value={email}
                                    placeholder='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-md input-neutral"
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <input
                                    type="password"
                                    id="signup-password"
                                    value={signupPassword}
                                    placeholder='password'
                                    onChange={(e) => setSignupPassword(e.target.value)}
                                    className="input input-md input-neutral"
                                    required
                                />
                            </div>
                            <div className='w-full'>
                                <input
                                    type="password"
                                    id="signup-password2"
                                    value={password2}
                                    placeholder='confirm password'
                                    onChange={(e) => setPassword2(e.target.value)}
                                    className="input input-md input-neutral"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSignupLoading}
                                className="btn btn-base"
                            >
                                {isSignupLoading ? 'Signing up...' : 'Create Account'}
                            </button>
                        </form>
                    </div>
                )}
                
            </div>

            <style>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
            </BackgroundBeamsWithCollision>
            </div>
    );
}

export default Auth;