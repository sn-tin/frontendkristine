import { StyleAbout, AboutContent, AboutPersonal, AboutTools, AboutImage } from '../About/About.styles';
import { motion } from 'framer-motion';
import { aboutPara1, aboutPara2 } from '../../animations';
import star from '../../assets/star.svg';
import kristineIMG from '../../assets/kristine-img.jpg'
import { Grid } from '@mui/material';

const About = () => {
    const technologies = [ "HTML", "CSS", "Sass", "Bootstrap", "JavaScript", "ReactJS", "Styled Components", "npmjs", "Framer Motion", "Webpack", "Parcel" ]
    return (
        <StyleAbout id="about">
            <motion.h2 variants={aboutPara1} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}>I am passionate on creating websites that is <span className='low-highlight'>functional and visually appealing</span> to the eyes of the user.</motion.h2>
            <AboutContent className='about-content'>
                <AboutImage>
                    <motion.img variants={aboutPara1} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }} src={kristineIMG} alt="Kristine" />
                </AboutImage>
                <div>
                    <AboutPersonal variants={aboutPara2} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }} className='personal'>
                        <p>
                        I’m Kristine de Jesus, a front-end developer based in the Philippines. 
                        I'm looking for a new opportunity to further my career in front-end development 
                        at a company that is looking for someone who is passionate about their work and 
                        where I can expose myself to new challenges and keep growing professionally. 
                        </p>
                    </AboutPersonal>
                    <AboutTools variants={aboutPara2} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }} className='tools' >
                        <p>As of today, these are the the technologies I’ve been working with:</p>
                        <Grid container spacing={2}>
                            {
                                technologies.map((tech, index) => <Grid key={index} item xs={4} lg={3}><img src={star} alt="star icon" /> {tech}</Grid>)
                            }
                        </Grid>
                    </AboutTools>
                </div>
            </AboutContent>
        </StyleAbout>
    )
}

export default About;