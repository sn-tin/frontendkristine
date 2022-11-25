import { FooterLine, FooterLine1, FooterLine2, FooterLine3 } from './Footer.style';
import { linesAnimate } from "../../animations";

const FooterLines = () => {
    return (
        <FooterLine variants={linesAnimate} initial="start" animate="end" className="footer-lines">
            <FooterLine1 className="footer-line-1"></FooterLine1>
            <FooterLine2 className="footer-line-2"></FooterLine2>
            <FooterLine3 className="footer-line-3"></FooterLine3>
        </FooterLine>
    )
}

export default FooterLines;