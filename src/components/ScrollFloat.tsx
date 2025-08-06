import React, { useEffect, useRef } from "react";

interface ScrollFloatProps {
    children: React.ReactNode;
    index: number;
    currentIndex: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({ children, index, currentIndex }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        if (currentIndex === index) {
            ref.current.style.opacity = "1";
            ref.current.style.transform = "translateY(0)";
            ref.current.style.pointerEvents = "auto";
            ref.current.style.zIndex = "5";
        } else if (currentIndex < index) {
            ref.current.style.opacity = "0";
            ref.current.style.transform = "translateY(25px)";
            ref.current.style.pointerEvents = "none";
            ref.current.style.zIndex = "1";
        } else {
            ref.current.style.opacity = "0";
            ref.current.style.transform = "translateY(-25px)";
            ref.current.style.pointerEvents = "none";
            ref.current.style.zIndex = "1";
        }
    }, [currentIndex, index]);

    return (
        <div
            ref={ref}
            className="scroll-float-section transition-all duration-500 ease-in-out"
        >
            {children}
        </div>
    );
};

export default ScrollFloat;
