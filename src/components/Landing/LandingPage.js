import Hero from "../Hero/Hero"
import About from "../About/About";
import Works from "../Works/Works";
import Footer from "../Footer/Footer";
import Divider from "../Divider/Divider";
import Article from "../Works/Article";

const LandingPage = () => {
    return (
        <section className="main-content">
            <Hero />
            <Divider />
            <About />
            <Works />
            <Footer />
        </section>
    )
}

export default LandingPage;