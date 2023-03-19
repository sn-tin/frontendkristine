import styled from "styled-components";
import star from '../../assets/star.svg';
import { theme, devices, DefaultStyle } from "../../styles.js";
import { motion } from "framer-motion";

const StyledNavbar = styled(DefaultStyle)`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0 auto;
    padding: 50px 20px 30px;
    position: relative;
    overflow-x: hidden;
    h1 {
        font-size: clamp(1.8rem, 2.5vw, 3rem);
        text-transform: uppercase;
        font-weight: ${theme.fontWeights.extraBold};
        margin: auto 0;
        z-index: 3;
    }
    @media screen and (${devices.laptop}) {
        padding: 60px 50px 40px;
    }
`

const HamburgerMenu = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    gap: 12px;
    cursor: pointer;
`
const Lines = styled(motion.div)`
    position: relative;
    width: 35px;
    &:nth-child(1) {
        top: -3px
    }
    &:nth-child(2) {
        top: -3px
    }
    @media screen and (${devices.laptop}) {
        width: 50px;
    }
`

const SmallScreenNav = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 2;
    background: ${theme.colors.dark};
`

const NavInner = styled(motion.div)`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    padding: 30px 15px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    a, a:active, a:visited {
        color: ${theme.colors.grayishWhite};
        font: ${theme.fontWeights.medium} clamp(3.5rem, 10vw, 8rem) ${theme.heading.fontFam};
        line-height: 1.2;
        text-align: left;
        text-align: center;
        text-decoration: none;
        margin: 0 30px;
        text-transform: uppercase;
    }
`
const HeaderLine = styled(motion.div)`
    position: absolute;
    top: auto;
    bottom: 0;
    right: 60px;
    display: flex;
    width: 40px;
    height: 40px;
    background-image: url(${star});
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    @media screen and (${devices.laptop}) {
        right: 150px;
    }
`

const HeaderLine1 = styled.div`
    position: absolute;
    left: -3.3rem;
    bottom: 6rem;
    width: 145px;
    height: 1px;
    transform: rotate(90deg);
    background-color: ${theme.colors.dark};
    @media screen and (${devices.laptop}) {
        .header-line-1 {
            width: 95px;
            left: -2rem;
            bottom: 4rem;
        }
    }
`

const HeaderLine2 = styled(HeaderLine1)`
    left: auto;
    right: 2.43rem;
    bottom: 1.21rem;
    width: 80rem;
    transform: none;
`

const HeaderLine3 = styled(HeaderLine2)`
    left: auto;
    right: auto;
    bottom: 1.21rem;
    width: 300px;
`

export { StyledNavbar, HamburgerMenu, Lines, 
    SmallScreenNav, NavInner, HeaderLine, HeaderLine1, HeaderLine2, HeaderLine3 };