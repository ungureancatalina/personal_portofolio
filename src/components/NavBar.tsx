import React, { useEffect } from "react";
import Button from "./Button";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeIndex, setActiveIndex }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/projects":
                setActiveIndex(0);
                break;
            case "/":
                setActiveIndex(1);
                break;
            case "/contact":
                setActiveIndex(2);
                break;
        }
    }, [location.pathname, setActiveIndex]);

    const handleClick = (index: number, path: string) => {
        setActiveIndex(index);
        navigate(path);
    };

    return (
        <header
            className="sticky top-0 z-20 w-full flex flex-wrap justify-center items-center
             gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-36 py-4 sm:py-6 md:py-10
             bg-[#851515]/20 backdrop-blur-md shadow-md px-4"
        >

        <Button active={activeIndex === 0} onClick={() => handleClick(0, "/projects")}>
                Projects
            </Button>
            <Button active={activeIndex === 1} onClick={() => handleClick(1, "/")}>
                About
            </Button>
            {/*<Button active={activeIndex === 2} onClick={() => handleClick(2, "/contact")}>*/}
            {/*    Contact*/}
            {/*</Button>*/}
        </header>
    );
};

export default Navbar;
