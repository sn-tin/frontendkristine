import { StyleAbout, AboutContent, AboutPersonal, AboutTools } from '../About/About.styles';
import { motion } from 'framer-motion';
import { aboutPara1, aboutPara2, rightAnimate } from '../../animations';

const About = () => {
    return (
        <StyleAbout>
            <motion.span variants={rightAnimate} initial="start" animate="end" exit="exit">Hello, I'm <h2>Kristine May de Jesus</h2></motion.span>
            <AboutContent className='about-content'>
                <AboutPersonal className='personal'>
                    <motion.p variants={aboutPara1} initial="start" animate="end"  exit="exit">
                    I’m Kristine de Jesus, a 22-year-old front-end developer based in the Philippines. 
                    My interest in frontend development began during my last semester in my 1st year of college when we were asked to create a bio data using HTML & CSS. 
                    Since then, I've been expanding my knowledge about frontend development. 
                    </motion.p>
                </AboutPersonal>
                <AboutTools className='tools' >
                    <motion.p variants={aboutPara1} initial="start" animate="end"  exit="exit">
                    As of today, these are the the technologies I’ve been working with:
                    </motion.p>
                    <motion.p variants={aboutPara2} initial="start" animate="end"  exit="exit">
                    HTML / CSS / Bootstrap / 
                    Sass / JavaScript / 
                    ReactJS / jQuery / Webpack / 
                    Parcel / Git / Ubuntu
                    </motion.p>
                </AboutTools>
            </AboutContent>
        </StyleAbout>
    )
}

export default About;