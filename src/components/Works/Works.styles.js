import styled from "styled-components";
import { DefaultStyle, devices, theme } from "../../styles";
import { motion } from "framer-motion";

const StyledWork = styled.section`
    background-image: linear-gradient(180.57deg, #FFFFFF 1.22%, #F5F5F5 99.51%);
    width: 100% !important;
`
const WorkContainer = styled(DefaultStyle)`
    padding: 50px 20px;
    margin: 30px auto 50px;
    /* border-radius: 20px; */
    @media screen and (${devices.laptop}){
        padding: 150px 20px;
        margin: auto;
    }
    h3 {
        color: ${theme.colors.fadeBlack};
    }
`

const WorkTexts = styled.div`
    h2 {
        font-size: ${theme.heading.smaller};
        margin-bottom: 30px;
        color: ${theme.colors.fadeBlack};
    }
    p {
        width: 100%;
        max-width: 700px;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        color: ${theme.colors.fadeBlack};
    }
`
const WorksGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 100%);
    @media screen and (${devices.laptop}) {
        grid-template-columns: repeat(2, 50%);
    }
`
const CardsWrapper = styled(motion.div)`
    width: 300px;
    margin: 30px auto;
    background-color: #FFFFFF;
    box-shadow: 1px 0px 16px -3px rgba(64,64,64,0.75);
    -webkit-box-shadow: 1px 0px 16px -3px rgba(64,64,64,0.75);
    -moz-box-shadow: 1px 0px 16px -3px rgba(64,64,64,0.75);
    /* border: 2px solid ${theme.colors.dark}; */
    /* position: relative; */
    @media screen and (${devices.tablet}) {
        width: 520px;
    }
`
const CardImg = styled.img`
    width: 100%;
    object-fit: scale-down;
`
const DetailsWrapper = styled.div`
    width: 100%;
    color: ${theme.colors.fadeBlack};
    background-color: #FFFFFF;
    padding: 20px 10px;
    .name-date {
        font-family: ${theme.heading.fontFam};
        font-weight: ${theme.fontWeights.semiBold};
        font-size: clamp(0.8rem, 2.5vw, 1.3rem);
        display: flex;
        justify-content: space-between;
    }
    p {
        margin: 10px 0;
    }
    .buttons { 
        margin: 20px 0;
        a {
            color: ${theme.colors.fadeBlack};
            font-family: ${theme.text.fontFam};
            font-weight: ${theme.fontWeights.semiBold};
            margin-right: 20px;
            text-transform: uppercase;
            text-decoration: none;
        }
    }
    @media screen and (${devices.laptop}) {
        padding: 30px 20px 20px;
    }
`

const ArticleWrapper = styled.article`
    width: 100%;
    max-width: 1216px;
    margin: 80px auto;
    padding: 0 20px;
`

const ArticleImage = styled.img`
    width: 100%;
    /* height: 100px; */
    object-fit: cover;
    object-position: center 17%;
    border: 2px solid ${theme.colors.dark};
    @media screen and (${devices.laptop}) {
        /* height: 230px; */
    }
`

const ArticleMainText = styled.div`
    font-family: ${theme.heading.fontFam};
    text-align: center;
    margin: 80px auto;
    span {
        color: ${theme.colors.fadeBlack};
        font-size: clamp(1rem, 2.5vw, 1.3rem);
        font-weight: ${theme.fontWeights.regular};
    }
    h1 {
        color: ${theme.colors.dark};
        font-size: clamp(2.5rem, 5vw, 3.75rem);
        font-weight: ${theme.fontWeights.black};
        margin: 10px auto;
    }
    p {
        width: 90%;
        max-width: 600px;
        margin: auto;
        font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    }
`
const FlexButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    margin: 20px auto;
    @media screen and (${devices.tablet}) {
        flex-direction: row;
        gap: 10px;
    }
`

const BorderButton = styled.a`
    width: 100%;
    color: ${theme.colors.dark};
    font-size: clamp(0.8rem, 2.5vw, 1rem);
    font-family: ${theme.heading.fontFam};
    text-transform: uppercase;
    text-decoration: none;
    background-color: transparent;
    border: 2px solid ${theme.colors.dark};
    padding: 10px 0;
    &:active, &:visited {
        color: ${theme.colors.dark};
    }
    @media screen and (${devices.tablet}) {
        width: 190px;
    }
` 

const SolidButton = styled(BorderButton)`
    color: ${theme.colors.grayishWhite};
    &:active, &:visited {
        color: ${theme.colors.grayishWhite};
    }
    background-color: ${theme.colors.dark};
`

const SubTopics = styled.div`
    margin-top: 25px;
    h2 {
        font-size: clamp(1.9rem, 2.5vw, 2.5rem);
        margin-bottom: 15px;
    }
    p {
        font-size: clamp(0.9rem, 2.5vw, 1.2rem);
        text-align: justify;
    }
`

export { StyledWork, WorkContainer, WorkTexts, WorksGrid, CardsWrapper, CardImg, DetailsWrapper, ArticleWrapper, ArticleImage, ArticleMainText, FlexButtons, BorderButton, SolidButton, SubTopics }