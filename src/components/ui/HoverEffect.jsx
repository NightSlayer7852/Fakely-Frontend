import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import { User, UserStar, Building2, Newspaper } from 'lucide-react';

export const projects = [
    {
        title: "E-Commerce Review Verification",
        description: "Spot fake, bot-made, or deceptive product reviews to maintain buyer trust.",
        link: "/review",
        icon: <UserStar />,
    },
    {
        title: "Fake News Detection",
        description: "Detecting fake news for authentic circulation of news.",
        link: "/reputation",    
        icon: <Newspaper />,
    },
    {
        title: "Corporate Reputation Management",
        description: "Managing your company's rep, influencing public perception, and protecting your brand image.",
        link: "/reputation",
        icon: <Building2 />,
    },
];

export const HoverEffect = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="max-w-5xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
                {projects.map((project, idx) => (
                    <div
                        key={project.link}
                        className="relative group block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-secondary/70 block rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                />
                            )}
                        </AnimatePresence>

                        <Link
                            to={project.link}
                            rel = "noopener noreferrer"
                            className="rounded-2xl h-full w-full p-4 overflow-hidden bg-secondary border border-transparent group-hover:border-secondary/50 relative z-50 block"
                        >
                            <div className="relative p-4">
                                <div className ="flex items-center space-x-4 justify-between">
                                    <h4 className="text-secondary-content text-xl font-bold tracking-wide mt-4">
                                        {project.title}
                                    </h4>
                                    <div className="h-7 w-7 text-secondary-content">
                                        {project.icon}
                                    </div>

                                    </div>
                                <p className="mt-8 text-secondary-content opacity-80 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HoverEffect;
