import { Routes, Route } from "react-router-dom";
import Hero from './Hero/Hero';
import Works from './Works/Works';
import About from './About/About';
import Article from "./Works/Article";
import works from "./Works/worksData";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer/Footer";
import { Divider } from "@mui/material";

const RouterSwitch = () => {
    return (
        <Routes>
            <Route path="/#" element={<Hero works={works} />} />
            <Route path="/#works" element={<Works works={works} />} />
            <Route path="/#works/:slug" element={<Article />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#contact" element={<Footer />} />
        </Routes>
    )
}

export default RouterSwitch;