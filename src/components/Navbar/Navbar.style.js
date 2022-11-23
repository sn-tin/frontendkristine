import styled from "styled-components";
import star from '../../assets/star.svg'
import lightStar from '../../assets/light-star.svg'
import { theme, devices } from "../../styles.js"
import { motion } from "framer-motion";

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0 auto;
    padding: 50px 0 30px;
    position: relative;
    overflow-x: hidden;
    h1 {
        font-size: clamp(1.2rem, 2.5vw, 1.563rem);
        text-transform: uppercase;
        font-weight: ${theme.fontWeights.extraBold};
    }
    @media screen and (${devices.laptop}) {
        padding: 60px 0 40px;
    }
`

const HamburgerMenu = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
    @media screen and (${devices.laptop}) {
        display: none;
    }
`
const Lines = styled.div`
    border: 1px solid ${theme.text.color};
`

const SmallScreenNav = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 90%;
    border: 1px solid #000000;
    text-align: center;
    background-color: ${theme.colors.dark};
    margin: 20px auto 30px;
    padding: 30px 0;
    position: absolute;
    z-index: 1;
    a, a:active, a:visited {
        color: ${theme.colors.grayishWhite};
        font: ${theme.fontWeights.medium} 19px ${theme.heading.fontFam};
        text-align: right;
        text-decoration: none;
        padding: 25px 10px;
        margin: 0 30px;
        &:not(:last-of-type){
        border-bottom: 1px solid #f5f5f5;
    }
        &.active {
            color: ${theme.colors.grayishWhite};
            background-color: ${theme.colors.dark};
            font-weight: ${theme.fontWeights.extraBold};
            position: relative;
            &::before {
                content: url(${lightStar});
                /* position: absolute;
                top: 40%;
                right: 5rem; */
                zoom: 20%;
                margin-right: 30px;
            }
        }
    }
    @media screen and (${devices.laptop}) {
        display: none !important;
    }
`

const LargeScreenNav = styled.div`
    display: none;
    a {
        width: 150px;
        color: ${theme.colors.fadeBlack};
        font-family: ${theme.heading.fontFam};
        font-size: clamp(0.9rem, 2.5vw, 1.1rem);
        font-weight: ${theme.fontWeights.medium};
        list-style: none;
        text-align: right;
        text-decoration: none;
        cursor: pointer;
        &:hover::before {
            content: url(${star});
            width: 26px;
            height: 26px;
            zoom: 20%;
            margin-right: 22px;
        }
        &.active::before {
            content: url(${star});
            width: 26px;
            height: 26px;
            zoom: 20%;
            margin-right: 22px;
        }
    }
    @media screen and (${devices.laptop}) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

const HeaderLine = styled(motion.div)`
    position: absolute;
    top: auto;
    bottom: 0;
    left: 15rem;
    display: flex;
    width: 40px;
    height: 40px;
    background-image: url(${star});
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
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
    width: 250px;
    transform: none;
`

const HeaderLine3 = styled(HeaderLine2)`
    left: auto;
    right: auto;
    bottom: 1.21rem;
    width: 55rem;
`

export { StyledNavbar, HamburgerMenu, Lines, 
    SmallScreenNav, LargeScreenNav, HeaderLine, HeaderLine1, HeaderLine2, HeaderLine3 };