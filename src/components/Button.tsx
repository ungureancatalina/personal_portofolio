import React, { useRef } from "react";

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
            className={`relative overflow-visible rounded-full px-20 py-12 min-w-[320px] text-4xl font-bold text-white transition-transform duration-300
            ${
                active
                    ? "bg-gradient-to-r from-teal-500 via-teal-700 to-teal-900 shadow-lg shadow-teal-400/60 scale-105"
                    : "bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 shadow-md hover:shadow-slate-400/40 hover:scale-105"
            }
            focus:outline-none`}>


        {children}
        </button>
    );
};

export default Button;