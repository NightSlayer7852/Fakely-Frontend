// src/pages/Contact.jsx - Basic Skeleton Structure

import React from 'react';
// Assuming you have Navbar and Footer imported from a shared layout path
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';

export default function Contact() {

    // Placeholder class names for styling based on the image
    const CARD_ICON_COLOR = 'text-orange-500';
    const CARD_TEXT_COLOR = 'text-gray-700';

    const ContactCard = ({ icon: Icon, title, content }) => (
        <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-shadow hover:shadow-xl">
            <div className={`p-4 rounded-full bg-orange-100 ${CARD_ICON_COLOR} mb-4 text-2xl`}>
                <Icon />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 uppercase">{title}</h3>
            <p className={`text-sm ${CARD_TEXT_COLOR} leading-relaxed`}>{content}</p>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="grow">

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
                            Contact Us
                        </h1>
                        <p className="text-primary text-xl">
                            Need an expert? You are more than welcomed to leave your contact
                            info and we will be in touch shortly.
                        </p>
                    </div>
                </header>

                {/* 2. Three-Column Info Cards Section */}
                <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">

                        {/* Card 1: Visit Us */}
                        <ContactCard
                            icon={FaHome} // Requires react-icons/fa
                            title="Visit Us"
                            content={<>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <span className="block font-semibold text-red-500 mt-2">123 Elizabeth St, London, UK</span>
                            </>}
                        />

                        {/* Card 2: Call Us */}
                        <ContactCard
                            icon={FaPhone} // Requires react-icons/fa
                            title="Call Us"
                            content={<>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <span className="block font-semibold text-red-500 mt-2">+44 (0) 203 116 7711</span>
                            </>}
                        />

                        {/* Card 3: Contact Us (Email) */}
                        <ContactCard
                            icon={FaEnvelope} // Requires react-icons/fa
                            title="Contact Us"
                            content={<>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <span className="block font-semibold text-red-500 mt-2">noreply@inoland.com</span>
                            </>}
                        />

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// NOTE: Remember to install react-icons: npm install react-icons
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';