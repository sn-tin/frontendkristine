import styled from "styled-components";
import star from '../../assets/star.svg'
import lightStar from '../../assets/light-star.svg'
import { theme, devices } from "../../styles.js"

const StyledNavbar = styled.div`
    width: 100%;
    max-width: 1246px;
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
        padding: 100px 0 40px;
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

const SmallScreenNav = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    border: 1px solid #000000;
    text-align: center;
    background-color: ${theme.backgroundColor};
    box-shadow: 5px 5px #000000;
    position: absolute;
    z-index: 1;
    a, a:active, a:visited {
        color: ${theme.heading.color};
        font: ${theme.fontWeights.medium} 19px ${theme.heading.fontFam};
        text-decoration: none;
        padding: 15px 0;
        &.active {
            color: ${theme.backgroundColor};
            background-color: ${theme.heading.color};
            font-weight: ${theme.fontWeights.extraBold};
            position: relative;
            &:before {
                content: url(${lightStar});
                position: absolute;
                top: 40%;
                left: 25%;
                zoom: 20%;
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
        color: ${theme.text.color};
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

const HeaderLine = styled.div`
    position: absolute;
    top: auto;
    bottom: 0;
    left: 15rem;
    display: flex;
    width: 30px;
    height: 30px;
    background-image: url(${star});
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    /* transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d; */
`

const HeaderLine1 = styled.div`
    position: absolute;
    left: -3.57rem;
    bottom: 6rem;
    width: 145px;
    height: 1px;
    transform: rotate(90deg);
    background-color: ${theme.heading.color};
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
    right: 1.6rem;
    bottom: 0.9rem;
    width: 245px;
    transform: none;
`

const HeaderLine3 = styled(HeaderLine2)`
    left: auto;
    right: auto;
    bottom: 0.9rem;
    /* width: 5.9rem; */
    width: 62rem;
`

export { StyledNavbar, HamburgerMenu, Lines, 
    SmallScreenNav, LargeScreenNav, HeaderLine, HeaderLine1, HeaderLine2, HeaderLine3 };