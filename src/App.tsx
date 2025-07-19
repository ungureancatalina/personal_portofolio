import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Projects from "./pages/Projects";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Navbar from "./components/NavBar";

function App() {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
            <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/" element={<About />} />
                        {/*<Route path="/contact" element={<Contact />} />*/}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
