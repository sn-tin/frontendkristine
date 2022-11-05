import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Works from './Works/Works';
import About from './About';
import Contact from './Contact';

const RouterSwitch = () => {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default RouterSwitch;