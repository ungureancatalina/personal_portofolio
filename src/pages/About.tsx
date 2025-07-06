import React, { useEffect, useState } from "react";
import "../styles/AboutStyle.css";
import "../styles/PagesStyle.css";
import ScrollFloat from "../components/ScrollFloat";

const About: React.FC = () => {
    const sections = [
        {
            title: "My Academic Journey",
            content: (
                <p>
                    I’m currently in my third year studying Computer Science at Babeș-Bolyai University in Cluj-Napoca. Ever since I started programming, I’ve been fascinated by how technology can be a bridge between ideas and real solutions. I love diving deep into both the logic behind systems and the creative side of designing user-friendly applications that truly make a difference. For me, great software isn’t just about making things work, it’s about crafting clean, maintainable and thoughtful solutions that people enjoy using.
                </p>
            ),
        },
        {
            title: "Passions Beyond Coding",
            content: (
                <>
                    <p>
                        When I’m not focused on coding or tech projects, I enjoy nurturing my creativity and appreciating the simple things in life. My passion for arts and aesthetics, especially drawing and designing, allows me to express ideas and feelings beyond words. This creative outlet is often inspired by the books I read, which fuel my imagination and open new perspectives. To keep my mind sharp and energized, I challenge myself with brain teasers and word puzzles that add a playful break to my routine.
                    </p>
                    <p>
                        I find balance and calm in nature, where exploring new places lets me soak in quiet beauty and recharge. Traveling further feeds my curiosity and sense of adventure by exposing me to new cultures and enriching experiences. All these passions truly define who I am. I’m proud of the person I am and I’m excited to keep growing by working on things that truly matter.
                    </p>
                </>
            ),
        },
        {
            title: "Practical Experience",
            content: (
                <>
                    <p>
                        Currently, I am participating in the Community Roots summer school, where I am gaining valuable hands-on experience through specialized trainings and active networking with professionals in the tech community. This program is helping me develop my communication skills, teamwork abilities and networking strategies essential for the tech industry.
                    </p>
                    <p>
                        Upon completing the summer school, I will begin working on a mobile app project in collaboration with @. This opportunity will allow me to apply the skills I've acquired and further enhance my practical knowledge through real-world project development.
                    </p>
                </>
            ),
        },
        {
            title: "Giving Back: Volunteering & Community",
            content: (
                <>
                    <p>
                        Since October 2023, I’ve been involved with Societatea Hermes, where I’m part of the HR team, helping with recruitment and people management alongside organizing events like “Cariere în IT,” hackathons and teambuilding activities. These experiences have sharpened my leadership, communication and organizational skills.
                    </p>
                    <p>
                        I also had the chance to volunteer at major festivals like Electric Castle and Untold in the summer of 2024, an exciting experience that strengthened my ability to adapt and communicate under pressure. I’m excited to return as a volunteer at Electric Castle again this summer in 2025.
                    </p>
                </>
            ),
        },
        {
            title: "Technical Skills",
            content: (
                <>
                    <p>
                        I have solid experience with programming languages like Java, JavaFX, React, HTML, CSS, JavaScript, TypeScript, C# and Python, along with databases such as PostgreSQL, SQLite, MongoDB and SQL Server. I’m comfortable using GitHub for version control and collaboration and I enjoy creating clean, maintainable code across various projects.
                    </p>
                    <p>
                        Beyond these, I’m familiar with C++, Dart, Assembly, .NET, REST APIs, HTTP protocols and object-oriented programming concepts. I understand key computer science principles like data structures, algorithms, graph theory, UML diagrams networking. I regularly use tools like Visual Studio, IntelliJ IDEA, Rider, WebStorm, PyCharm, CLion and VS Code. I have foundational Linux knowledge. I’m motivated to keep learning and stay current with evolving technologies.
                    </p>
                </>
            ),
        },
        {
            title: "Soft Skills",
            content: (
                <p>
                    I pride myself on bringing clear and effective communication to every team I join, fostering collaboration that helps projects thrive. My strong organizational skills and disciplined time management ensure that I consistently meet deadlines without compromising quality. Through my volunteering experiences and academic work, I’ve developed the ability to think critically and adapt quickly in high-pressure situations, enabling me to manage crises calmly and find creative solutions to unexpected challenges. Attention to detail is something I value deeply, as I believe it’s the little things that make a big difference. Above all, I strive to cultivate a positive and supportive environment that encourages teamwork, open dialogue and shared success.
                </p>
            ),
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();

            if (scrollTimeout) return;

            if (e.deltaY > 0) {
                setCurrentIndex((prev) => Math.min(prev + 1, sections.length - 1));
            } else if (e.deltaY < 0) {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
            }

            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
            }, 600);
        };

        window.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", onWheel);
        };
    }, [sections.length]);

    return (
        <div className="relative h-[70vh] pt-8 text-center max-w-[1500px] mx-auto">
            <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-black mb-10 text-[#6b2f2f] select-none max-w-full break-words text-center px-4">
                Ungurean Cătălina-Iuliana
            </h1>
            <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] font-medium text-[#6b2f2f] mt-[-1.5rem] md:mt-[-2rem] lg:mt-[-2.5rem] mb-10 select-none italic text-center px-4">
                Scroll to find more
            </p>

            <div className="relative mt-20 w-full h-[70vh] flex justify-center items-center">
                {sections.map((section, i) => (
                    <ScrollFloat key={i} index={i} currentIndex={currentIndex}>
                        <section>
                            <h2 className="text-[3.5rem] font-bold mb-10 text-[#851515]">{section.title}</h2>
                            {section.content}
                        </section>
                    </ScrollFloat>
                ))}
            </div>
        </div>
    );
};

export default About;
