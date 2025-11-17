import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((prev) => ({
                    ...prev,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit items-center rounded-full border border-primary bg-base-100 p-2"
        >
            <Link to="/home"><Tab setPosition={setPosition}>Home</Tab></Link>
            <Link to="/profile"><Tab setPosition={setPosition}>Profile</Tab></Link>
            <Link to="/contact"><Tab setPosition={setPosition}>Contact</Tab></Link>
            <Link to="/about"><Tab setPosition={setPosition}>About</Tab></Link>

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;

                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className="
                relative z-10 block cursor-pointer
                px-4        /* balanced height */
                text-base-content
                font-semibold
                transition-all duration-200
                hover:text-primary-content
            "
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={position}
            className="
                absolute z-0
                h-3/4            /* matches the tab height exactly */
                rounded-full 
                bg-primary
                text-primary-content
            "
        />
    );
};

export default SlideTabs;
