import React, { useEffect, useRef } from "react";
import "../styles/ProfileStyle.css";

interface ProfileCardProps {
    name: string;
    title: string;
    handle: string;
    contactText: string;
    avatarUrl: string;
    showUserInfo?: boolean;
    enableTilt?: boolean;
    onContactClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
                                                     name,
                                                     title,
                                                     handle,
                                                     contactText,
                                                     avatarUrl,
                                                     showUserInfo = true,
                                                     enableTilt = true,
                                                     onContactClick,
                                                 }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!enableTilt) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * -10;

            cardRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
            cardRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
            cardRef.current.style.setProperty("--pointer-x", `${(x / rect.width) * 100}%`);
            cardRef.current.style.setProperty("--pointer-y", `${(y / rect.height) * 100}%`);
            cardRef.current.style.setProperty("--pointer-from-center", `${Math.sqrt(((x - centerX) ** 2 + (y - centerY) ** 2)) / (Math.sqrt(centerX ** 2 + centerY ** 2))}`);
            cardRef.current.style.setProperty("--pointer-from-top", `${y / rect.height}`);
            cardRef.current.style.setProperty("--pointer-from-left", `${x / rect.width}`);
            cardRef.current.classList.add("active");
        };

        const handleMouseLeave = () => {
            if (!cardRef.current) return;
            cardRef.current.style.setProperty("--rotate-x", `0deg`);
            cardRef.current.style.setProperty("--rotate-y", `0deg`);
            cardRef.current.style.setProperty("--card-opacity", `0`);
            cardRef.current.classList.remove("active");
        };

        const current = cardRef.current;
        current?.addEventListener("mousemove", handleMouseMove);
        current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            current?.removeEventListener("mousemove", handleMouseMove);
            current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [enableTilt]);

    return (
        <div className="pc-card-wrapper" ref={cardRef}>
            <div className="pc-card">
                <div className="pc-inside"></div>
                <div className="pc-shine"></div>
                <div className="pc-glare"></div>
                {showUserInfo && (
                    <div className="pc-user-info">
                        <div className="pc-user-details">
                            <div className="pc-mini-avatar">
                                <img src={avatarUrl} alt={`${name}`} />
                            </div>
                            <div className="pc-user-text">
                                <div className="pc-handle">@{handle}</div>
                            </div>
                        </div>
                        <button className="pc-contact-btn" onClick={onContactClick}>
                            {contactText}
                        </button>
                    </div>
                )}
                <div className="pc-content">
                    <div className="pc-details">
                        <h3>{name}</h3>
                        <p>{title}</p>
                    </div>
                    <div className="pc-avatar-content">
                        <img
                            className="avatar"
                            src={avatarUrl}
                            alt={`${name}`}
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;