import React, { useRef } from "react";
import "../styles/ButtonStyle.css";


interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, active }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const createParticles = () => {
        const button = buttonRef.current;
        if (!button) return;

        for (let i = 0; i < 12; i++) {
            const particle = document.createElement("span");
            particle.className = "gooey-particle";
            const angle = Math.random() * 2 * Math.PI;
            const distance = 30 + Math.random() * 30;

            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            particle.style.setProperty("--x", `${x}px`);
            particle.style.setProperty("--y", `${y}px`);
            particle.style.setProperty("--delay", `${Math.random() * 100}ms`);

            button.appendChild(particle);
            setTimeout(() => particle.remove(), 600);
        }
    };

    const handleClick = () => {
        createParticles();
        onClick?.();
    };

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            className={`relative overflow-visible rounded-full
        px-4 py-2 text-sm min-w-[140px]
        sm:px-6 sm:py-3 sm:text-base sm:min-w-[180px]
        md:px-10 md:py-5 md:text-xl md:min-w-[220px]
        lg:px-14 lg:py-7 lg:text-2xl lg:min-w-[260px]
        xl:px-20 xl:py-10 xl:text-3xl xl:min-w-[300px]
        font-bold text-[#d6cac9] transition-transform duration-300
        ${
                active
                    ? "bg-gradient-to-r from-[#851515] to-[#330808] shadow-lg shadow-[#851515]/60 scale-105"
                    : "bg-gradient-to-r from-[#595c5b] to-[#49524f] shadow-md hover:shadow-[#77a18c]/40 hover:scale-105"
            }
        focus:outline-none`}
        >
            {children}
        </button>
    );

};

export default Button;