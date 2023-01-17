import styled from "styled-components";
import { HeaderLine } from "../Navbar/Navbar.style";
import { DefaultStyle, devices, theme } from "../../styles";
import { motion } from "framer-motion";


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
    .navigate, .contact, .mail {
        margin: 15px 0;
    }
    .phone, .address, .socials, .mail {
        margin-bottom: 20px;
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
        .phone, .address, .socials, .mail {
            margin-bottom: 30px;
        }
        .socials, .mail {
            margin-bottom: 0;
        }
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

const FooterStar = styled(HeaderLine)`
    top: -1.2rem;
    left: 8;
    padding: 40px 0 0;
    @media screen and (${devices.laptop}) {
        bottom: 5.5rem;
        right: 14rem;
    }
`

const FooterLine1 = styled(motion.div)`
    width: 0;
    position: absolute;
    @media screen and (${devices.laptop}) {
        background-color: ${theme.colors.dark};
        transform: rotate(180deg);
        width: 1px;
        height: 100%;
        left: 16.2rem;
    }
`

const FooterLine2 = styled(motion.div)`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.dark};
    position: absolute;
    top: 0;
`
const FooterLine3 = styled(motion.div)`
    background-color: ${theme.colors.dark};
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
`
const FooterLine4 = styled(FooterLine3)`
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
`
const FooterLine5 = styled(FooterLine4)`
    left: auto;
    right: 0;
`

export { StyledFooter, FooterWrapper, FooterLinks, FooterStar, FooterLine1, FooterLine2, FooterLine3, FooterLine4, FooterLine5 }