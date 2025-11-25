// src/pages/About.jsx - Alternating Grid Layout

import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import StickyScroll from '../components/ui/StickyRollRevealContact.jsx';
import { Boxes } from '../components/ui/BackgroundBoxes.jsx';
import { cn } from '../lib/utils.js';

const content = [
    {
        title: "VISIT US",
        description:
            "Explore our workspace and learn how we build cutting- edge AI tools for detecting fake content.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAU0GL3YT_GA_3BrhX4yudrpYJruOFGU-yg&s",
    },
    {
        title: "CALL US",
        description:
            "Speak with our experts for integrations, demos, or technical support.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEETufZwZ8r89fzhqJYE3sc43Ot2mEY1efXQ&s",
    },
    {
        title: "EMAIL US",
        description:
            "Get in touch for collaborations, partnerships, or general inquiries.",
        img: "data:image/png;base64,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",
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
                    Contact Us
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
