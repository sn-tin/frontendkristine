import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Home/Home';
import Works from './Works/Works';
import About from './About/About';
import Article from "./Works/Article";
import works from "./Works/worksData";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer/Footer";
import { Divider } from "@mui/material";

const RouterSwitch = () => {
    const location = useLocation();
    return (
        <section className="main-content">
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Home works={works} />} />
                    <Divider />
                    <Route path="/works" element={<Works works={works} />} />
                    <Route path="/works/:slug" element={<Article />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Footer />} />
                </Routes>
            </AnimatePresence>
        </section>
    )
}

export default RouterSwitch;