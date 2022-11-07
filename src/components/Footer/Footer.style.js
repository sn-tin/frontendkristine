import styled from "styled-components";
import star from "../../assets/star.svg"
import { HeaderLine, HeaderLine1, HeaderLine2, HeaderLine3 } from "../Navbar/Navbar.style";
import { devices, theme } from "../../styles";


const StyledFooter = styled.div`
    width: 100%;
    max-width: 1246px;
    display: flex;
    padding: 30px 0 50px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    p {
        font: clamp(1rem,2.5vw,1.1rem) ${theme.heading.fontFam};
        margin: 0 10px 0 auto;
    }
    @media screen and (${devices.laptop}) {
        padding: 40px 0 100px;
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
    @media screen and (${devices.laptop}) {
        bottom: 8rem;
        right: 14rem;
    }
`

const FooterLine1 = styled(HeaderLine1)`
    left: -1.3rem;
    top: 4rem;
    bottom: 0rem;
    width: 72px;
    transform: rotate(-90deg);
    /* background-color: red; */
    @media screen and (${devices.laptop}) {
        left: -3.6rem;
        top: 6rem;
        width: 145px;
    }
`

const FooterLine2 = styled(HeaderLine2)`
    width: 65rem;
    /* background-color: blue; */
`

const FooterLine3 = styled(HeaderLine3)`
    left: 1.5rem;
    /* background-color: yellow; */
`

export { StyledFooter, FooterLinks, FooterLines, FooterLine1, FooterLine2, FooterLine3 }