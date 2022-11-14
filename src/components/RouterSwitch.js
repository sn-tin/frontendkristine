import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Works from './Works/Works';
import About from './About/About';
import Contact from './Contact/Contact';
import WorkArticles from "./Works/WorkArticles";
import NoContext from "./Works/NoContext";
import Shortly from "./Works/Shortly";
import ToDo from "./Works/ToDo";
import RockPaperScissor from "./Works/RockPaperScissor";

const RouterSwitch = () => {
    return (
        <section className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />}>
                    <Route path=":params" element={<NoContext />} />
                    {/* <Route path=":params" element={<Shortly />} />
                    <Route path=":params" element={<ToDo />} />
                    <Route path=":params" element={<RockPaperScissor />} /> */}
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </section>
    )
}

export default RouterSwitch;