import React, { useEffect, useState } from "react";
import "../styles/AboutStyle.css";
import "../styles/PagesStyle.css";
import ScrollFloat from "../components/ScrollFloat";

const About: React.FC = () => {
    const sections = [
        {
            title: "My Academic Journey",
            content: (
                <>
                    <p className="mb-4">
                        I’m currently in my third year studying <b>Computer Science</b> at <b>Babeș-Bolyai University</b> in <b>Cluj-Napoca</b>. Ever since I started programming, I’ve been fascinated by how <b>technology</b> can be a bridge between <b>ideas</b> and <b>real solutions</b>. I love diving deep into both the <b>logic</b> behind systems and the <b>creative side</b> of designing <b>user-friendly applications</b> that truly make a difference. For me, great software isn’t just about making things work, it’s about crafting <b>clean, maintainable</b> and <b>thoughtful solutions</b> that people enjoy using.
                    </p>
                    <p className="mb-4">
                        Outside of coursework, I actively engage in <b>IT community workshops</b> focused on <b>public speaking</b>, <b>innovation</b> and staying up to date with <b>current technologies</b>. I also attend <b>company visits</b> and training sessions on topics like <b>writing effective CVs</b>, <b>analytical thinking</b>, <b>communication skills</b> as well as workshops on <b>recruitment strategies</b>, <b>motivating volunteers</b> and <b>engaging people in meaningful work</b>. These experiences support both my <b>professional growth</b> and <b>personal development</b>.
                    </p>
                </>
            ),
        },
        {
            title: "Passions Beyond Coding",
            content: (
                <>
                    <p className="mb-4">
                        When I’m not focused on <b>coding</b> or <b>tech projects</b>, I enjoy nurturing my <b>creativity</b> and appreciating the simple things in life. My passion for <b>arts</b> and <b>aesthetics</b>, especially <b>drawing</b> and <b>designing</b>, allows me to express ideas and feelings beyond words. This <b>creative outlet</b> is often inspired by the <b>books</b> I read, which fuel my imagination and open new perspectives. To keep my mind sharp and energized, I challenge myself with <b>brain teasers</b> and <b>word puzzles</b> that add a playful break to my routine.
                    </p>
                    <p className="mb-4">
                        I find <b>balance</b> and <b>calm</b> in <b>nature</b>, where exploring new places lets me soak in <b>quiet beauty</b> and recharge. <b>Traveling</b> feeds my <b>curiosity</b> and <b>sense of adventure</b> by exposing me to new <b>cultures</b> and enriching experiences. All these passions truly define who I am. I’m proud of the person I am and I’m excited to keep growing by working on things that truly matter.
                    </p>
                </>
            ),
        },
        {
            title: "Practical Experience",
            content: (
                <>
                    <p className="mb-4">
                        In the summer of 2025, I completed the <b>Community Roots</b> summer school, where I co-developed <b>CASualBot</b>, an <b>AI chatbot</b> that helps Romanian clinics simplify <b>CAS insurance</b> processes.
                        I worked in a collaborative <b>team</b>, guided by <b>international mentors</b> and attended workshops on <b>entrepreneurship</b>, <b>innovation</b>, <b>public speaking</b> and <b>startup pitching</b>. We delivered a working <b>prototype</b>, a full <b>investor pitch deck</b> and a <b>go-to-market strategy</b>.
                    </p>
                    <p className="mb-4">
                        I also completed a summer internship at <b>AROBS</b>, where I gained hands-on experience in building <b>mobile apps</b> using <b>Android Studio</b> and <b>Kotlin</b>. During this time, I developed apps featuring <b>login/logout functionality</b>, <b>weather apps</b>, <b>movie lists</b> and <b>color-themed projects</b>, in both <b>Jetpack Compose</b> and <b>XML</b>. I also collaborated with colleagues on a shared project to design and implement a <b>large language model application</b> similar to <b>ChatGPT</b>. This experience strengthened my understanding of <b>best practices</b>, <b>UI/UX design principles</b>, <b>teamwork</b> and <b>effective communication</b>.
                    </p>
                </>
            ),
        },
        {
            title: "Giving Back: Volunteering & Community",
            content: (
                <>
                    <p className="mb-4">
                        Since October 2023, I’ve been involved with <b>Societatea Hermes</b>, where I’m part of the <b>HR team</b>, helping with <b>recruitment</b> and <b>people management</b> alongside organizing events like <b>“Cariere în IT”</b>, <b>hackathons</b> and <b>teambuilding activities</b>. These experiences have sharpened my <b>leadership</b>, <b>communication</b> and <b>organizational skills</b>.
                    </p>
                    <p className="mb-4">
                        I also had the chance to contribute as a volunteer at <b>DevTalks</b> and company events hosted by organizations such as <b>Accesa</b>, supporting <b>sessions</b>, <b>workshops</b> and <b>student engagement initiatives</b>. These experiences allowed me to connect with the <b>tech community</b>, foster <b>professional networking</b> and further develop my <b>organizational</b> and <b>teamwork skills</b>.
                    </p>
                    <p className="mb-4">
                        Additionally, I was a volunteer at major festivals like <b>Electric Castle</b> and <b>Untold</b> in the summer of 2024, an exciting experience that strengthened my ability to <b>adapt</b> and <b>communicate under pressure</b>.
                    </p>
                </>
            ),
        },
        {
            title: "Technical Skills",
            content: (
                <>
                    <p className="mb-4">
                        I have solid experience with <b>programming languages</b> like <b>Java</b>, <b>React</b>, <b>HTML</b>, <b>Kotlin</b>, <b>CSS</b>, <b>JavaFX</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>C#</b> and <b>Python</b>, along with <b>databases</b> such as <b>PostgreSQL</b>, <b>SQLite</b>, <b>MongoDB</b> and <b>SQL Server</b>. I’m comfortable using <b>GitHub</b> for version control and collaboration and I enjoy creating <b>clean, maintainable code</b> across various projects.
                    </p>
                    <p className="mb-4">
                        Beyond these, I’m familiar with  <b>Dart</b>, <b>Assembly</b>, <b>.NET</b>, <b>REST APIs</b>, <b>HTTP protocols</b> and <b>object-oriented programming </b> concepts. I understand key <b>computer science principles</b> like <b>data structures</b>, <b>algorithms</b>, <b>graph theory</b>, <b>UML diagrams</b> and <b>networking</b>. I regularly use <b>Visual Studio</b>, <b>IntelliJ IDEA</b>, <b>Rider</b>, <b>WebStorm</b>, <b>PyCharm</b>, <b>CLion</b> and <b>VS Code</b>. I have foundational <b>Linux</b> knowledge. I’m motivated to keep learning and stay current with evolving technologies.
                    </p>
                </>
            ),
        },
        {
            title: "Soft Skills",
            content: (
                <p className="mb-4">
                    I pride myself on bringing <b>clear and effective communication</b> to every team I join, fostering <b>collaboration</b> that helps projects thrive. My strong <b>organizational skills</b> and disciplined <b>time management</b> ensure that I consistently meet deadlines without compromising quality. Through my <b>volunteering experiences</b> and <b>academic work</b>, I’ve developed the ability to <b>think critically</b> and <b>adapt quickly</b> in high-pressure situations, enabling me to manage crises calmly and find <b>creative solutions</b> to unexpected challenges. <b>Attention to detail</b> is something I value deeply, as I believe it’s the little things that make a big difference. Above all, I strive to cultivate a <b>positive and supportive environment</b> that encourages teamwork, <b>open dialogue</b> and shared success.
                </p>
            ),
        },
        {
            title: "Contact Information",
            content: (
                <p className="mb-4">
                    You can connect with me on <b><a href="https://github.com/ungureancatalina" target="_blank" rel="noopener noreferrer">GitHub</a></b> and <b><a href="https://www.linkedin.com/in/catalina-ungurean-22b16a280/" target="_blank" rel="noopener noreferrer">LinkedIn</a></b>. For direct inquiries, please feel free to email me at <b><a href="mailto:ungurean.catalina.iuliana@gmail.com">ungurean.catalina.iuliana@gmail.com</a></b>.
                    <br />

                    (Clicking the bolded links will redirect you to my respective pages.)
                </p>
            ),
        }
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
        <div className="relative h-[80vh] pt-4 text-center max-w-[800px] mx-auto">
            <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-black mb-6 text-[#6b2f2f] select-none break-words px-2">
                Ungurean Cătălina-Iuliana
            </h1>
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] font-medium text-[#6b2f2f] mt-[-0.8rem] mb-6 select-none italic px-2">
                Scroll to find more
            </p>

            <div className="relative mt-10 w-full h-[60vh] flex justify-center items-center">
                {sections.map((section, i) => (
                    <ScrollFloat key={i} index={i} currentIndex={currentIndex}>
                        <section>
                            <h2 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] font-bold mb-6 text-[#851515]">
                                {section.title}
                            </h2>
                            <div className="text-left text-[0.875rem] sm:text-[1rem] leading-relaxed">
                                {section.content}
                            </div>
                        </section>
                    </ScrollFloat>
                ))}
            </div>
        </div>
    );

};

export default About;
