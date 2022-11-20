import styled from "styled-components";
import { HeaderLine, HeaderLine1, HeaderLine2, HeaderLine3 } from "../Navbar/Navbar.style";
import { devices, theme } from "../../styles";


const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 35px 0 50px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    p {
        font: clamp(1rem,2.5vw,1.1rem) ${theme.heading.fontFam};
        margin: 0 10px 0 auto;
    }
    @media screen and (${devices.laptop}) {
        padding: 50px 0 50px;
        margin-top: 50px;
        p {
            margin: 0 10px 0 auto;
        }
    }
`

const FooterLinks = styled.div`
    a {
        margin-left: 8px;
    }
    a img {
        width: 20px;
        height: 20px;
    }
    @media screen and (${devices.laptop}) {
        a {
            margin-left: 15px;
        }
        a img {
            width: 25px;
            height: 25px;
        }
    }
`

const FooterLines = styled(HeaderLine)`
    bottom: 4.5rem;
    right: 12rem;
    left: auto;
    padding: 40px 0 0;
    @media screen and (${devices.laptop}) {
        bottom: 5.5rem;
        right: 14rem;
    }
`

const FooterLine1 = styled(HeaderLine1)`
    left: -1.25rem;
    top: 4.5rem;
    bottom: 0rem;
    width: 80px;
    transform: rotate(-90deg);
    @media screen and (${devices.laptop}) {
        left: -3.3rem;
        top: 6rem;
        width: 145px;
    }
`

const FooterLine2 = styled(HeaderLine2)`
    width: 65rem;
    bottom: 1.2rem;   
`

const FooterLine3 = styled(HeaderLine3)`
    left: 1.5rem;
    bottom: 1.2rem;
`

export { StyledFooter, FooterLinks, FooterLines, FooterLine1, FooterLine2, FooterLine3 }