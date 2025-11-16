import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const BoxesCore = ({ className, ...rest }) => {
    const rows = new Array(40).fill(1);
    const cols = new Array(30).fill(1);

    // DaisyUI secondary palette
    const colors = [
        "#f97316",
        "#10b981",
        "#3b82f6",
        "#a855f7",
        "#ec4899",
        "#14b8a6",
        "#f43f5e",
        "#facc15",
        "#22d3ee",
    ];

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    return (
        <div
            style={{
                transform:
                    "translate(-50%, -50%) skewX(-48deg) skewY(14deg) scale(0.7)", // FIXED
            }}
            className={cn(
                "absolute top-1/2 left-1/2 z-0 flex h-[150%] w-[150%] p-4", // FIXED
                className
            )}
            {...rest}
        >
            {rows.map((_, i) => (
                <div key={"row" + i} className="relative h-8 w-16">
                    {cols.map((_, j) => (
                        <motion.div
                            key={"col" + j}
                            whileHover={{
                                backgroundColor: getRandomColor(),
                                transition: { duration: 0 },
                            }}
                            className="relative h-8 w-16"
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export const Boxes = React.memo(BoxesCore);
