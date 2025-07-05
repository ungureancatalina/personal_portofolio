import React from "react";
import ProfileCard from "../components/ProfileCard";

const Contact: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center min-h-screen"
            style={{
                background: `linear-gradient(to right, #AFBFC8, #B1D2D2, #ABC5BF)`,
                padding: "2rem",
            }}>
            <main className="mt-20 mb-20 w-full flex justify-start px-40">
                <ProfileCard
                    name="Ungurean Cătălina"
                    title=""
                    handle="ungureancatalina"
                    contactText="Contact Me"
                    avatarUrl="../public/me.jpg"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => console.log("Contact clicked")}
                />
            </main>
        </div>
    );
};

export default Contact;