import styled from "styled-components";
import { DefaultStyle, devices, theme } from "../../styles";
import { motion } from "framer-motion";

const StyledWork = styled.section`
    width: 100% !important;
`
const WorkContainer = styled(DefaultStyle)`
    padding: 0 20px;
    margin: 30px auto 50px;
    @media screen and (${devices.laptop}){
        padding: 0 50px;
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
const CardsWrapper = styled(motion.div)`
    width: 100%;
    margin: 30px auto 0;
    background-color: #FFFFFF;
    box-shadow: 1px 0px 16px -3px rgba(64,64,64,0.75);
    -webkit-box-shadow: 1px 0px 16px -3px rgba(64,64,64,0.75);
    -moz-box-shadow: 1px 0px 16px -3px rgba(64,64,64,0.75);
    position: relative;
    .status {
        font-weight: ${theme.fontWeights.bold};
        font-size: clamp(0.8rem, 2.5vw, 1rem);
        position: absolute;
        background-color: #FFFFFF;
        top: 25px;
        right: 30px;
        padding: 8px 15px;
        border-radius: 20px;
        box-shadow: 1px 0px 16px -3px rgba(64,64,64,0.75);
    }
`
const CardImg = styled.img`
    width: 100%;
`
const DetailsWrapper = styled.div`
    width: 100%;
    color: ${theme.colors.fadeBlack};
    background-color: #FFFFFF;
    padding: 35px 25px;
    .name-date {
        font-family: ${theme.text.fontFam};
        font-weight: ${theme.fontWeights.semiBold};
        font-size: clamp(1.2rem, 2.5vw, 1.4rem);
        display: flex;
        justify-content: space-between;
    }
    p {
        margin: 10px 0;
        line-height: 2;
        &:last-of-type {
            margin: 25px 0;
        }
    }
    .role {
        font-weight: ${theme.fontWeights.bold};
        opacity: 0.8;
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

export { StyledWork, WorkContainer, WorkTexts, CardsWrapper, CardImg, DetailsWrapper }