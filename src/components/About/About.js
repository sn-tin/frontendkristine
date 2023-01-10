import { StyleAbout, AboutContent, AboutPersonal, AboutTools } from '../About/About.styles';
import { motion } from 'framer-motion';
import { aboutPara1, aboutPara2, rightAnimate } from '../../animations';

const About = () => {
    return (
        <StyleAbout>
            <motion.span variants={rightAnimate} initial="start" animate="end" exit="exit">Hello, I'm <h2>Kristine May de Jesus</h2></motion.span>
            <AboutContent className='about-content'>
                <AboutPersonal className='personal'>
                    <motion.p variants={aboutPara1} initial="start" animate="end"  exit="exit">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum.</motion.p>
                </AboutPersonal>
                <AboutTools className='tools' >
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