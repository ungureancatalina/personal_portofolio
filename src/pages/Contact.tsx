import React from "react";
import ProfileCard from "../components/ProfileCard";
import FlipCard from "../components/FlipCard";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "../styles/PagesStyle.css";

const Contact: React.FC = () => {
    return (
        <div className="relative h-screen text-center w-full max-w-[1600px] mx-auto px-6 flex flex-col items-center select-none">
            <div className="relative h-screen text-center w-full max-w-[1800px] mx-auto px-6 flex flex-col items-center select-none">
                <p className="text-[1.8rem] font-medium text-[#6b2f2f] mb-20 italic select-none pt-20">
                    Feel free to reach out!
                </p>

                <div className="w-full flex flex-wrap justify-center gap-12 md:gap-20 items-start">

                    <div className="w-full md:flex-1 flex flex-col gap-12 md:gap-20 items-center md:items-start max-w-[1100px]">
                        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-12 w-full">
                            <FlipCard
                                icon={<FaGithub size={80} color="#000" />}
                                title="GitHub"
                                subtitle="@ungureancatalina"
                                link="https://github.com/ungureancatalina"
                                className="w-full max-w-[500px] mx-auto"
                            />
                            <FlipCard
                                icon={<FaLinkedin size={80} color="#0077B5" />}
                                title="LinkedIn"
                                subtitle="/in/ungureancatalina"
                                link="https://www.linkedin.com/in/catalina-ungurean-22b16a280/"
                                className="w-full max-w-[500px] mx-auto"
                            />
                        </div>

                        <FlipCard
                            icon={<FaEnvelope size={80} color="#851515" />}
                            title="Email"
                            subtitle="ungurean.catalina.iuliana@gmail.com"
                            link="mailto:ungurean.catalina.iuliana@gmail.com"
                            className="w-full max-w-[500px] mx-auto"
                        />
                    </div>

                    <div className="w-full md:w-[380px] max-w-[380px] mx-auto">
                        <ProfileCard
                            name="Ungurean Cătălina"
                            title="Computer Science Student"
                            handle="ungureancatalina"
                            avatarUrl="../public/me.jpg"
                            showUserInfo={true}
                            enableTilt={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
