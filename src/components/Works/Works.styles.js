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
    width: 100%;
    max-width: 450px;
    margin: 30px auto;
    background-color: #FFFFFF;
    box-shadow: 1px 0px 16px -3px rgba(64,64,64,0.75);
    -webkit-box-shadow: 1px 0px 16px -3px rgba(64,64,64,0.75);
    -moz-box-shadow: 1px 0px 16px -3px rgba(64,64,64,0.75);
`
const CardImg = styled.img`
    width: 100%;
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

export { StyledWork, WorkContainer, WorkTexts, WorksGrid, CardsWrapper, CardImg, DetailsWrapper }