import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import { StyledFooter, FooterLinks } from "./Footer.style";
import FooterLines from "./FooterLines";

const Footer = () => {
    return (
        <footer>
            <StyledFooter>
                <FooterLines />
                <p>Find me in</p>
                <FooterLinks className="footer-links">
                    <a className="footer-link" href="https://github.com/sn-tin" target="_blank" rel="noreferrer">
                        <img className="github" src={github} alt="Github Icon" />
                    </a>
                    <a className="footer-link" href="https://linkedin.com/in/kristine-may-de-jesus" target="_blank" rel="noreferrer">
                        <img className="linkedin" src={linkedin} alt="LinkedIn Icon" />
                    </a>
                </FooterLinks>
            </StyledFooter>
        </footer>
    )
}

export default Footer;