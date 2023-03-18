import { aboutPara1, linesAnimate } from "../../animations";
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import { StyledFooter, FooterLinks, FooterWrapper, FooterStar, FooterLine1, FooterLine2, FooterLine3, FooterLine4, FooterLine5, CreditFooter } from "./Footer.style";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer id="footer">
            <StyledFooter>
                <FooterWrapper>
                    <motion.div className="navigate" variants={aboutPara1} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}>
                        <h3>KM.</h3>
                        <FooterLinks>
                            <a href="#">Home</a>
                            <a href="#works">Works</a>
                            <a href="#about">About</a>
                        </FooterLinks>
                    </motion.div>
                    <FooterStar variants={linesAnimate} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}></FooterStar>
                    <FooterLine1 variants={linesAnimate} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}></FooterLine1>
                    <FooterLine2 variants={linesAnimate} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}></FooterLine2>
                    <FooterLine3 variants={linesAnimate} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}></FooterLine3>
                    <FooterLine4 variants={linesAnimate} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}></FooterLine4>
                    <FooterLine5 variants={linesAnimate} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}></FooterLine5>
                    <motion.div className="contact" variants={aboutPara1} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}>
                        <div className="phone">
                            <h4>Phone</h4>
                            <p>(+63) 915 945 4515</p>
                        </div>
                        <div className="address">
                            <h4>Address</h4>
                            <p>Molino II, Bacoor City, Cavite</p>
                        </div>
                        <div className="socials">
                            <h4>Socials</h4>
                            <a className="footer-link" href="https://github.com/sn-tin" target="_blank" rel="noreferrer">
                                <img className="github" src={github} alt="Github Icon" />
                            </a>
                            <a className="footer-link" href="https://linkedin.com/in/kristine-may-de-jesus" target="_blank" rel="noreferrer">
                                <img className="linkedin" src={linkedin} alt="LinkedIn Icon" />
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="mail" variants={aboutPara1} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}>
                        <h4>Let's work together</h4>
                        <p>Please don’t hesistate to reach out if you're interested in working together or just wanted to say hi. I’d be glad to talk with you!</p>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&href=kristinemaydj.work@gmail.com" target="_blank" rel="noreferrer">kristinemaydj.work@gmail.com</a>
                    </motion.div>
                </FooterWrapper>
            </StyledFooter>
            <CreditFooter>
                <p>Kristine de Jesus © 2023 ✨</p>
            </CreditFooter>
        </footer>
    )
}

export default Footer;