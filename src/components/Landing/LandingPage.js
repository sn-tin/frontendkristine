import Hero from "../Hero/Hero"
import About from "../About/About";
import Works from "../Works/Works";
import Divider from "../Divider/Divider";

const LandingPage = () => {
    return (
        <section className="main-content">
            <Hero />
            <Divider />
            <Works />
            <About />
        </section>
    )
}

export default LandingPage;