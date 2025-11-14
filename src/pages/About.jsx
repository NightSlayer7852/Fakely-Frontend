// src/pages/About.jsx - Alternating Grid Layout

import React from 'react';
// Assuming your layout components are correctly imported
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';

// --- Reusable Component for Alternating Sections ---
const ContentBlock = ({ title, text, imagePlaceholder, reverse = false }) => {

    // Determine the order of columns based on the 'reverse' prop
    const orderClasses = reverse ? 'md:order-1' : 'md:order-none';

    return (
        <div className="grid md:grid-cols-2 gap-12 items-center py-12 border-b border-gray-100">

            {/* Column 1: Text Content */}
            <div className={`space-y-4 p-4 ${orderClasses}`}>
                <h3 className="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {text}
                </p>
                <button className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                    Read More &rarr;
                </button>
            </div>

            {/* Column 2: Image */}
            <div className={`${orderClasses}`}>
                <div className={`w-full h-80 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center overflow-hidden`}>
                    {imagePlaceholder}
                </div>
            </div>
        </div>
    );
};

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow">

                {/* 1. Page Header */}
                <header
                    className="relative text-center py-32 text-white overflow-hidden"
                    style={{
                        backgroundImage: 'url(cityscape_placeholder.jpg)', // Replace with your image
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'white', // Dark overlay for text contrast
                        backgroundBlendMode: 'multiply'
                    }}
                >
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h1 className="text-neutral text-4xl font-extrabold mb-4">
                            About Us
                        </h1>
                        <p className="text-primary text-xl">
                            Need an expert? You are more than welcomed to leave your contact
                            info and we will be in touch shortly.
                        </p>
                    </div>
                </header>

                {/* 2. Main Content Sections (Alternating Grid) */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Section 1: Our Vision (Text Left / Image Right) */}
                    <ContentBlock
                        title="Our Vision"
                        text="Our vision is to be the leader in digital authenticity verification, empowering users and businesses to build trust in every online interaction. We aim to protect brand integrity through innovative technology and actionable insights."
                        imagePlaceholder="[Image: Meeting/Collaboration]"
                        reverse={false} // Default order
                    />

                    {/* Section 2: Our Approach (Image Left / Text Right) */}
                    <ContentBlock
                        title="Our Approach"
                        text="We combine cutting-edge machine learning models with human expertise, focusing on precision and scalability. Our approach prioritizes user privacy while delivering high-fidelity results instantly across all platforms."
                        imagePlaceholder="[Image: Technology/Team]"
                        reverse={true} // Reverse the order
                    />

                    {/* Section 3: Our Promise (Text Left / Image Right) */}
                    <ContentBlock
                        title="Our Promise"
                        text="We promise transparency in our analysis and unwavering commitment to data security. Your data is protected, and our methods are constantly refined to stay ahead of evolving threats and guarantee reliable outcomes."
                        imagePlaceholder="[Image: Product/Security]"
                        reverse={false}
                    />
                </section>


            </main>

            <Footer />
        </div>
    );
}