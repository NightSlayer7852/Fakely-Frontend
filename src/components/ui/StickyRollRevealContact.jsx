"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../lib/utils";



const bgColors = ["bg-primary", "bg-secondary", "bg-accent"];
const textColors = [
    "text-primary-content",
    "text-secondary-content",
    "text-accent-content",
];

export const StickyScroll = ({content}) => {
    const [activeCard, setActiveCard] = useState(0);
    const containerRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const cards = () => Array.from(container.querySelectorAll(".snap-start"));

        const updateActiveByScroll = () => {
            const c = container;
            const list = cards();
            if (!list.length) return;

            const scrollTop = c.scrollTop;
            // find card whose offsetTop is nearest to scrollTop
            let bestIdx = 0;
            let bestDiff = Infinity;

            for (let i = 0; i < list.length; i++) {
                const card = list[i];
                const offset = card.offsetTop;
                const diff = Math.abs(offset - scrollTop);
                if (diff < bestDiff) {
                    bestDiff = diff;
                    bestIdx = i;
                }
            }

            if (bestIdx !== activeCard) {
                setActiveCard(bestIdx);
            }
        };

        const onScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateActiveByScroll);
        };

        // initialize once
        updateActiveByScroll();
        container.addEventListener("scroll", onScroll, { passive: true });

        // also update on resize (in case layout changes)
        const onResize = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateActiveByScroll);
        };
        window.addEventListener("resize", onResize);

        return () => {
            container.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerRef, activeCard]);

    return (
        <div className="flex w-full items-center justify-center py-20">
            <div
                ref={containerRef}
                className={cn(
                    "relative flex w-1/2 h-75 overflow-y-auto rounded-xl transition-colors duration-300 snap-y snap-mandatory",
                    bgColors[activeCard]
                )}
            >
                <div className="flex flex-col w-full px-10 py-10 space-y-10">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="snap-start min-h-75 flex flex-col justify-center"
                        >
                            <h2
                                className={cn(
                                    "text-4xl font-extrabold transition-opacity duration-300",
                                    textColors[activeCard],
                                    activeCard === index ? "opacity-100" : "opacity-40"
                                )}
                            >
                                {item.title}
                            </h2>

                            <p
                                className={cn(
                                    "mt-6 text-base transition-opacity duration-300",
                                    textColors[activeCard],
                                    activeCard === index ? "opacity-100" : "opacity-40"
                                )}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="sticky top-10 hidden h-60 w-80 overflow-hidden rounded-xl shadow-xl bg-base-100 lg:block mx-10">
                    <img
                        src={content[activeCard].img}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default StickyScroll;
