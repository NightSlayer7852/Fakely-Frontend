import { motion } from "motion/react";

export function HeroSectionOne() {
    return (
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center">
            <div className="px-4 py-10 md:py-20">
                <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-primary md:text-4xl lg:text-6xl">
                    {"Authenticity Matters. Detect Fake Content in Seconds"
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                className="mr-2 inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg font-normal text-base-content"
                >
                    From social posts to articles, our AI inspects content deeply to reveal hidden patterns, inconsistencies, and synthetic fingerprints. Verify anything with one click.
                </motion.p>
            </div>
        </div>
    );
}

export default HeroSectionOne;
