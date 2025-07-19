import "../styles/PagesStyle.css";
import ScrollFloatCircular from "../components/ScrollFloatCircular";
import React from "react";

const defaultItems = [
    { url: `https://github.com/ungureancatalina/UBB--FMI/tree/main/AN_2/SEM_1/MAP/lab6fx`, text: "Social Network", image: "/img1.jpg" },
    { url: `https://github.com/ungureancatalina/UBB--FMI/tree/main/AN_2/SEM_2/MPP`, text: "Moto Contest", image: "/img2.jpg" },
    { url: `https://github.com/ungureancatalina/task_calendar`, text: "Task Calendar", image: "/img3.jpg" },
    { url: `https://github.com/ungureancatalina/cute-projects`, text: "Mini Projects", image: "/img4.jpg" },
    { url: `https://github.com/ungureancatalina/grade_calculator`, text: "Grade Calculator", image: "/img5.jpg" },
    { url: `https://github.com/ungureancatalina/UBB--FMI/tree/main/AN_2/SEM_2/ISS/monitorizare_angajati`, text: "Employee Monitoring", image: "/img6.jpg" },
    { url: `https://github.com/ungureancatalina/mood_tracker`, text: "Mood Tracker", image: "/img7.jpg" },
    { url: `https://github.com/ungureancatalina/applicant_processor`, text: "Applicant Processo", image: "/img8.jpg" },
    { url: `https://github.com/ungureancatalina/atestat`, text: "General Knowledge Quiz", image: "/img9.jpg" },
    { url: `https://github.com/ungureancatalina/UBB--FMI`, text: "University Projects", image: "/img10.jpg" },
    { url: `https://github.com/ungureancatalina/personal_portofolio`, text: "Personal Portofolio", image: "/img11.jpg" },
    { url: `https://github.com/ungureancatalina/UBB--FMI/tree/main/AN_2/SEM_2/AI/proiect`, text: "Peri-implantitis Diagnosis", image: "/img12.jpg" },
];

const Projects: React.FC = () => {
    return (
        <div className="relative w-full max-w-[1400px] h-[800px] mx-auto mt-12 overflow-visible">
            <div
                className="
                absolute top-[72%] left-[50%]
                w-full max-w-[900px] min-w-[250px]
                sm:w-[80vw] md:w-[70vw] lg:w-[60vw]
                h-auto min-h-[200px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]
                rounded-full
                shadow-lg shadow-[rgba(210,133,92,0.4)]
                flex flex-col justify-center items-center
                font-bold text-center text-[#d77d70]
                p-4 sm:p-8 lg:p-12
                select-none pointer-events-none
                transform -translate-x-1/2 -translate-y-1/2
                backdrop-blur-md
                bg-gradient-to-tr from-[rgba(236,222,218,0.85)] to-[rgba(255,244,238,0.9)]
                transition-transform duration-700 ease-in-out
                hover:scale-[1.05]
              "
                style={{
                    boxShadow: "0 6px 20px rgba(139, 0, 0, 0.7), 0 20px 60px rgba(139, 0, 0, 0.3)",
                    border: "1px solid rgba(139, 0, 0, 0.4)",
                }}
            >
                <p className="font-normal text-sm sm:text-lg lg:text-3xl mt-2 mr-4 text-[#851515] leading-relaxed max-w-[80vw] md:max-w-[600px]">
                    A curated collection of academic and personal projects that demonstrate practical skills, creativity, and continuous self-driven learning. These projects reflect my commitment to applying theoretical knowledge to real-world challenges, exploring innovative solutions, and expanding my expertise through hands-on experience and personal initiative.
                </p>
            </div>

            {defaultItems.map((item, index) => (
                <ScrollFloatCircular key={index} index={index} totalItems={defaultItems.length}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="no-underline">
                        <div className="select-none text-left">
                            <img
                                src={item.image}
                                alt={item.text}
                                className="
                  w-[200px] h-[150px] rounded-[15px]
                  shadow-lg shadow-black/35
                "
                            />
                            <p className="text-[#851515] font-bold text-xl mt-2 -ml-12">
                                {item.text}
                            </p>
                        </div>
                    </a>
                </ScrollFloatCircular>
            ))}
        </div>
    );
};

export default Projects;
