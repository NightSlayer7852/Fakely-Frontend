// src/pages/About.jsx - Alternating Grid Layout

import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import StickyScroll from '../components/ui/StickyRollRevealContact.jsx';
import { Boxes } from '../components/ui/BackgroundBoxes.jsx';
import { cn } from '../lib/utils.js';

const content = [
    {
        title: "Redefining Digital Truth & Building a Safer Ecosystem",
        description:
            "We exist to restore trust in the online world. We build tools to slow the spread of misinformation, protect communities, and help organizations maintain integrity by ensuring every piece of information is traceable, authentic, and trustworthy.",
        img: "data:image/jpeg;base64,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",
    },
    {
        title: "Intelligent Content Defense",
        description:
            "Our platform acts as a digital shield, scanning text, images, videos, and posts to reveal hidden patterns, synthetic fingerprints, and signs of manipulation. We empower everyone with instant content authenticity checks.",
        img: "/src/assets/about2.jpg",
    },
    {
        title: "Future-Ready AI Technology",
        description:
            "Our technology fuses deep learning, NLP, multimedia forensics, and real-time monitoring to decode authenticity at scale. It is designed for the next generation of digital challenges, learning and adapting just like the content it protects against.",
        img: "/src/assets/about3.jpeg",
    },
];

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-base-100">
            <Navbar />

            {/* HERO SECTION */}
            <div className="relative w-full h-60 overflow-hidden flex flex-col items-center justify-center">

                <Boxes />

                {/* Heading + Subtext */}
                <h1 className="text-7xl font-extrabold text-center text-base-content relative z-20">
                    About Us
                </h1>

                <p className="text-center mt-2 text-base-content relative z-20">
                    Need an expert? You are more than welcomed to leave your contact info and we will be in touch shortly
                </p>
            </div>

            <div className="relative w-full h-100 overflow-hidden flex flex-col items-center justify-center ">


                <Boxes />

                <StickyScroll content={content} />
            </div>
{/* 
            <Footer /> */}
        </div>
    );
}
