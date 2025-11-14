// // src/components/Footer.jsx

// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// export default function Footer() {
    
//     // Define the high-contrast color palette
//     const ACCENT_ORANGE = 'text-orange-500'; // vibrant orange for highlights
//     const HOVER_ORANGE_TEXT = 'hover:text-orange-400';
//     const MAIN_BG = 'bg-black'; // Primary background
//     const TEXT_LIGHT = 'text-gray-300'; // Soft white text
//     const COPYRIGHT_BG = 'bg-black'; // Slightly lighter black for the bottom bar

//     return (
//         // 🔑 Primary Background: Black
//         <footer className={`${MAIN_BG} ${TEXT_LIGHT}  border-orange-600 mt-12`}>
//             <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    
//                     {/* Column 1: Logo & Socials */}
//                     <div className="space-y-4">
//                         <h3 className="text-2xl font-extrabold text-white uppercase tracking-wider">
//                             YOURSTORE <span className={ACCENT_ORANGE}>FAKELY</span>
//                         </h3>
//                         <p className="text-sm text-gray-400">Driven by technology, focused on quality.</p>
//                         <div className="flex space-x-3 pt-2">
//                             {/* Social Icons with Orange Hover */}
//                             <a href="#" className={`text-gray-400 ${HOVER_ORANGE_TEXT}`}><FaFacebookF /></a>
//                             <a href="#" className={`text-gray-400 ${HOVER_ORANGE_TEXT}`}><FaTwitter /></a>
//                             <a href="#" className={`text-gray-400 ${HOVER_ORANGE_TEXT}`}><FaInstagram /></a>
//                             <a href="#" className={`text-gray-400 ${HOVER_ORANGE_TEXT}`}><FaYoutube /></a>
//                         </div>
//                     </div>

//                     {/* Column 2: Categories */}
//                     <div>
//                         <h4 className="text-lg font-semibold text-white mb-4 uppercase">Categories</h4>
//                         <ul className="space-y-2 text-sm">
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>Electronics</a></li>
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>Clothing</a></li>
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>Home Goods</a></li>
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>New Arrivals</a></li>
//                         </ul>
//                     </div>

//                     {/* Column 3: Information */}
//                     <div>
//                         <h4 className="text-lg font-semibold text-white mb-4 uppercase">Information</h4>
//                         <ul className="space-y-2 text-sm">
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>Special Offers</a></li>
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>News & Events</a></li>
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>Returns Policy</a></li>
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>Contact Us</a></li>
//                         </ul>
//                     </div>

//                     {/* Column 4: My Account */}
//                     <div>
//                         <h4 className="text-lg font-semibold text-white mb-4 uppercase">My Account</h4>
//                         <ul className="space-y-2 text-sm">
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>My Orders</a></li>
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>My Credit Slips</a></li>
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>My Addresses</a></li>
//                             <li><a href="#" className={HOVER_ORANGE_TEXT}>My Personal Info</a></li>
//                         </ul>
//                     </div>
                    
//                     {/* Column 5: Contact Us */}
//                     <div className="col-span-2 md:col-span-1">
//                         <h4 className="text-lg font-semibold text-white mb-4 uppercase">Contact Us</h4>
//                         <p className="text-sm text-gray-400">123 Company, 45 New Main Street</p>
//                         <p className="text-sm text-gray-400">Studio North, Mumbai, India</p>
//                         <p className="text-sm mt-2">Call Us: +91 987 654 3210</p>
//                         <p className="text-sm">Email: support@yourstore.com</p>
//                         <div className="mt-6 flex space-x-2">
//                            {/* Payment Icons Placeholder */}
//                            <div className="h-6 w-auto bg-white/10 rounded flex items-center justify-center p-1 text-xs">
//                                Payment Icons
//                            </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Copyright Bar - Using a dark gray for separation */}
//             <div className={`text-center py-4 text-xs ${COPYRIGHT_BG} text-gray-500`}>
//                 &copy; {new Date().getFullYear()} YourStore. All Rights Reserved.
//             </div>
//         </footer>
//     );
// }

export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current">
                    <path
                        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <p>
                    ACME Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            
        </footer>
    );
}