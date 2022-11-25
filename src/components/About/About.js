import { StyleAbout, AboutContent, AboutPersonal, AboutTools } from '../About/About.styles';
import { motion } from 'framer-motion';
import { aboutSubHeading1, aboutPara1, aboutSubHeading2, aboutPara2, rightAnimate } from '../../animations';

const About = () => {
    return (
        <StyleAbout>
            <motion.h1 variants={rightAnimate} initial="start" animate="end" exit="exit">About</motion.h1>
            <AboutContent className='about-content'>
                <AboutPersonal className='personal'>
                    <motion.h2 variants={aboutSubHeading1} initial="start" animate="end" exit="exit">I'm Kristine. A developer, learner and solver.</motion.h2>
                    <motion.p variants={aboutPara1} initial="start" animate="end"  exit="exit">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum.</motion.p>
                </AboutPersonal>
                <AboutTools className='tools' >
                    <motion.h2 variants={aboutSubHeading2} initial="start" animate="end"  exit="exit">Tools I use</motion.h2>
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