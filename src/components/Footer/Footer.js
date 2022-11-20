import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import { StyledFooter, FooterLinks, FooterLines, FooterLine1, FooterLine2, FooterLine3 } from "./Footer.style";

const Footer = () => {
    return (
        <footer>
            <StyledFooter>
                <FooterLines className="footer-lines">
                    <FooterLine1 className="footer-line-1"></FooterLine1>
                    <FooterLine2 className="footer-line-2"></FooterLine2>
                    <FooterLine3 className="footer-line-3"></FooterLine3>
                </FooterLines>
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