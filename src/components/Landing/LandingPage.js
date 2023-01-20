import Hero from "../Hero/Hero"
import About from "../About/About";
import Works from "../Works/Works";
import Divider from "../Divider/Divider";

const LandingPage = () => {
    return (
        <section className="main-content">
            <Hero />
            <Divider />
            <About />
            <Works />
        </section>
    )
}

export default LandingPage;