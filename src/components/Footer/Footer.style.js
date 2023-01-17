import styled from "styled-components";
import { HeaderLine, HeaderLine1, HeaderLine2, HeaderLine3 } from "../Navbar/Navbar.style";
import { DefaultStyle, devices, theme } from "../../styles";


const StyledFooter = styled(DefaultStyle)`
   padding: 50px 20px;
   h3 {
       font-size: clamp(2rem, 2.5vw, 2.2rem);
    }
    `
const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto);
    padding: 40px;
    position: relative;
    overflow: hidden;
    .navigate, .contact, .mail {
        margin: 15px 0;
    }
    .phone, .address, .socials, .mail {
        margin-bottom: 10px;
        h4 {
            font-size: clamp(1.1rem, 2.5vw, 1.3rem);
            margin-bottom: 8px;
        }
    }
    .socials {
        a {
            margin-right: 10px;
        }
    }
    .mail {
        p {
            margin-bottom: 25px;
        }
        a {
            color: ${theme.colors.dark};
            font-family: ${theme.text.fontFam};
            font-weight: ${theme.fontWeights.semiBold};
            text-decoration: none;
            border: 1px solid ${theme.colors.dark};
            padding: 10px 20px;
        }
    }
    @media screen and (${devices.laptop}) {
        grid-template-columns: 20rem 20rem auto;
    }
`
const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    a {
        font-family: ${theme.text.fontFam};
        color: ${theme.colors.fadeBlack};
        text-decoration: none;
        margin-top: 15px;
    }
`

const FooterLine = styled(HeaderLine)`
    top: -1.3rem;
    left: 8;
    padding: 40px 0 0;
    @media screen and (${devices.laptop}) {
        bottom: 5.5rem;
        right: 14rem;
    }
`

const FooterLine1 = styled(HeaderLine1)`
    width: 0;
    @media screen and (${devices.laptop}) {
        width: 320px;
        left: -8.75rem;
        top: 11rem;
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
const FooterLine4 = styled.div`
    background-color: ${theme.colors.dark};
    width: 100rem;
    height: 1px;
    position: absolute;
    bottom: 0;
`
const FooterLine5 = styled(FooterLine4)`
    width: 1px;
    height: 50rem;
    position: absolute;
    left: 0;
`
const FooterLine6 = styled(FooterLine5)`
    left: auto;
    right: 0;
`

export { StyledFooter, FooterWrapper, FooterLinks, FooterLine, FooterLine1, FooterLine2, FooterLine3, FooterLine4, FooterLine5, FooterLine6 }