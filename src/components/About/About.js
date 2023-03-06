import { StyleAbout, AboutContent, AboutPersonal, AboutTools, AboutImage } from '../About/About.styles';
import { motion } from 'framer-motion';
import { aboutPara1, aboutPara2, rightAnimate } from '../../animations';
import star from '../../assets/star.svg';
import kristineIMG from '../../assets/kristine-img.jpg'

const About = () => {
    const technologies = [ "HTML", "CSS", "Bootstrap", "Sass", "JavaScript", "ReactJS", "Styled Components", "npmjs", "Framer Motion", "Webpack", "Parcel" ]
    return (
        <StyleAbout id="about">
            <motion.h2 variants={rightAnimate} initial="start" animate="end" exit="exit">I am <span className='low-highlight'>passionate on creating websites</span> that is pleasing to the eyes of the user.</motion.h2>
            <AboutContent className='about-content'>
                <AboutImage>
                    <img src={kristineIMG} alt="Kristine" />
                </AboutImage>
                <div>
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
                                technologies.map((tech) => <p><img src={star} alt="Star icon"/>{tech}</p>)
                            }
                        </div>
                    </AboutTools>
                </div>
            </AboutContent>
        </StyleAbout>
    )
}

export default About;