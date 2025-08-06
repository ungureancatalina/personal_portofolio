import React from "react";
import "../styles/FlipCard.css";

interface FlipCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    link: string;
    className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ icon, title, subtitle, link, className }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flip-card ${className ?? ""}`}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    Flip Me
                </div>
                <div className="flip-card-back">
                    <div className="flip-icon">{icon}</div>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
            </div>
        </a>
    );
};

export default FlipCard;
