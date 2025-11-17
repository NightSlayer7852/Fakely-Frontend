// src/pages/About.jsx - Alternating Grid Layout

import React from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import StickyScroll from '../components/ui/StickyRollRevealContact.jsx';
import { Boxes } from '../components/ui/BackgroundBoxes.jsx';
import { cn } from '../lib/utils.js';

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

                <StickyScroll />
            </div>
            {/* 
            <Footer /> */}
        </div>
    );
}
