import "../styles/CircularStyle.css";
import React, { useEffect, useRef, useState } from "react";

interface ScrollFloatCircularProps {
    children: React.ReactNode;
    index: number;
    totalItems: number;
}

const speed = 0.0001;

const ScrollFloatCircular: React.FC<ScrollFloatCircularProps> = ({ children, index, totalItems }) => {
    const ref = useRef<HTMLDivElement>(null);
    const angleOffset = (2 * Math.PI * index) / totalItems;
    const [radius, setRadius] = useState({ radiusX: 0, radiusY: 0 });

    useEffect(() => {
        const updateRadius = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            setRadius({
                radiusX: w * 0.35,
                radiusY: h * 0.3,
            });
        };

        updateRadius();
        window.addEventListener("resize", updateRadius);
        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    useEffect(() => {
        let animationFrameId: number;
        const startTime = performance.now();
        if (!ref.current) return;

        const animate = (time: number) => {
            const elapsed = time - startTime;
            const angle = angleOffset + elapsed * speed;

            const x = radius.radiusX * Math.cos(angle);
            const y = radius.radiusY * Math.sin(angle);

            if (ref.current) {
                ref.current.style.position = "absolute";
                ref.current.style.top = "80%";
                ref.current.style.left = "50%";
                ref.current.style.transform = `translate(${x}px, ${y}px) scale(1.2) translate(-50%, -50%)`;
                ref.current.style.opacity = "1";
                ref.current.style.zIndex = "5";
                ref.current.style.pointerEvents = "auto";
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [angleOffset, radius]);

    return <div ref={ref}>{children}</div>;
};

export default ScrollFloatCircular;
