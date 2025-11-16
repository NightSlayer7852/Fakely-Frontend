// src/pages/Home.jsx

import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import HoverEffect from '../components/ui/HoverEffect.jsx';
import HeroSectionOne from '../components/ui/HeroSection.jsx';
export default function Home() {
    return (
        
        <div>
        <Navbar />
            <HeroSectionOne/>
            <HoverEffect />
        <Footer />
        </div>
    );
}