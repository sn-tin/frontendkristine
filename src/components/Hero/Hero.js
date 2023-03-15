import { Content, StyledHero } from './Hero.style';
import { heroAnimate } from '../../animations';
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"

const Home = ({works}) => {
    return (
        <StyledHero id='hero'>
            <Content 
                variants={heroAnimate}
                initial="start"
                animate="end"
                exit="exit"
            >
                <div className='left-aligned'>
                    <h1 className='hero-tile'>Hi there,<br/><span className='low-highlight'>I'm Kristine May!</span></h1>
                    <p className='description'>Knowledgeable in front-end tech stacks such as HTML, CSS, and JavaScript (ReactJS).<br/>
                    I can implement web pages from design or concept through deployment with a responsive and mobile-first approach and strategy.</p>
                </div>
                <div className="links">
                    <a className="footer-link" href="https://github.com/sn-tin" target="_blank" rel="noreferrer">
                        <img className="github" src={github} alt="Github Icon" />
                    </a>
                    <a className="footer-link" href="https://linkedin.com/in/kristine-may-de-jesus" target="_blank" rel="noreferrer">
                        <img className="linkedin" src={linkedin} alt="LinkedIn Icon" />
                    </a>
                </div>
            </Content>
        </StyledHero>
    )
}

export default Home;