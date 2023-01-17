import { StyleAbout, AboutContent, AboutPersonal, AboutTools } from '../About/About.styles';
import { motion } from 'framer-motion';
import { aboutPara1, aboutPara2, rightAnimate } from '../../animations';

const About = () => {
    const technologies = [ "HTML", "CSS", "Bootstrap", "Sass", "JavaScript", "ReactJS", "Styled Components", "Framer Motion", "Webpack", "Parcel" ]
    return (
        <StyleAbout id="about">
            <motion.span variants={rightAnimate} initial="start" animate="end" exit="exit">Hello, I'm <h2>Kristine May de Jesus</h2></motion.span>
            <AboutContent className='about-content'>
                <AboutPersonal variants={aboutPara1} initial="start" animate="end"  exit="exit" className='personal'>
                    <p>
                    I’m Kristine de Jesus, a 22-year-old front-end developer based in the Philippines. 
                    My interest in frontend development began during my last semester in my 1st year of college when we were asked to create a bio data using HTML & CSS. 
                    Since then, I've been expanding my knowledge about frontend development. 
                    </p>
                </AboutPersonal>
                <AboutTools variants={aboutPara2} initial="start" animate="end"  exit="exit" className='tools' >
                    <p>As of today, these are the the technologies I’ve been working with:</p>
                    <div>
                        {
                            technologies.map((tech) => <p>{tech}</p>)
                        }
                    </div>
                </AboutTools>
            </AboutContent>
        </StyleAbout>
    )
}

export default About;