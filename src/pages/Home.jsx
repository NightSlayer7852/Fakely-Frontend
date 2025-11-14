// src/pages/Home.jsx

import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';

export default function Home() {
    return (
        
        <div>
        <Navbar />
            <div className="hero bg-base min-h-screen">
                <div className="hero-content flex-col justify-center items-center lg:flex-row">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="h-xl w-xs shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to Fakely</h1>
                        <p className="py-6">
                            Welcome to your personalized portal. Manage your account, securely submit your reviews, and monitor their status in a private, dedicated environment.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}