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
        img: "/src/assets/about1.jpeg",
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
