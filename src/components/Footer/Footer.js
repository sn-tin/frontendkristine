import { useState } from "react";
import { NavLink } from "react-router-dom";
import { linesAnimate } from "../../animations";
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import { StyledFooter, FooterLinks, FooterWrapper, FooterLine, FooterLine1, FooterLine2, FooterLine3, FooterLine4, FooterLine5, FooterLine6 } from "./Footer.style";

const Footer = () => {
    const [isActive] = useState(false);
    return (
        <footer>
            <StyledFooter>
                <FooterWrapper>
                    <div className="navigate">
                        <h3>KM.</h3>
                        <FooterLinks>
                            <NavLink to="/" className={isActive ? "active" : null} >Home</NavLink>
                            <NavLink to="/works" className={isActive ? "active" : null} >Works</NavLink>
                            <NavLink to="/about" className={isActive ? "active" : null} >About</NavLink>
                            <NavLink to="/contact" className={isActive ? "active" : null} >Contact</NavLink>
                        </FooterLinks>
                    </div>
                    <FooterLine variants={linesAnimate} initial="start" animate="end">
                        <FooterLine1></FooterLine1>
                        <FooterLine2></FooterLine2>
                        <FooterLine3></FooterLine3>
                    </FooterLine>
                    <FooterLine4></FooterLine4>
                    <FooterLine5></FooterLine5>
                    <FooterLine6></FooterLine6>
                    <div className="contact">
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
                    </div>
                    <div className="mail">
                        <h4>Let's work together</h4>
                        <p>Please don’t hesistate to reach out if you're interested in working together or just wanted to say hi. I’d be glad to talk with you!</p>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kristinemaydj.work@gmail.com" target="_blank" rel="noreferrer">kristinemaydj.work@gmail.com</a>
                    </div>
                </FooterWrapper>
            </StyledFooter>
        </footer>
    )
}

export default Footer;