import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Home/Home';
import Works from './Works/Works';
import About from './About/About';
import Contact from './Contact/Contact';
import Article from "./Works/Article";
import { AnimatePresence } from "framer-motion";

const RouterSwitch = () => {
    const location = useLocation();
    return (
        <section className="main-content">
            <AnimatePresence>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<Works />}>
                        <Route path=":slug" element={<Article />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </section>
    )
}

export default RouterSwitch;