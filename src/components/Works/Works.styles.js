import styled from "styled-components";
import { devices, theme } from "../../styles";

const WorkTexts = styled.div`
    width: 100%;
    max-width: 1216px;
    margin: 0 auto;
    h1 {
        font-size: ${theme.heading.smaller};
    }
    p {
        width: 100%;
        max-width: 700px;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
    }
`

const CardFlex = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-x: scroll;
    scroll-behavior: smooth;
    margin: 30px 0;
    gap: 20px;
    @media screen and (${devices.laptop}) {
       flex-direction: row;
       margin: 30px 0 0;
       gap: 40px;
    }
`

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    border: 2px solid ${theme.colors.dark};
    @media screen and (${devices.tablet}) {
        width: 400px;
    }
    @media screen and (${devices.laptop}) {
        flex-direction: column;
        width: 527px;
        position: relative;
        left: 317px;
    }
`

const CardImg = styled.img`
    width: 100%;
    transform: scale(1.1);
`

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(52, 52, 52, 0.21);
`

const ReadButton = styled.button`
    text-transform: uppercase;
    color: ${theme.colors.grayishWhite};
    font-size: clamp(0.5rem, 2.5vw, 1.125rem);
    font-weight: ${theme.fontWeights.bold};
    padding: 10px 15px;
    border: none;
    background-color: ${theme.colors.dark};
`

const DetailsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.grayishWhite};
    font-family: ${theme.heading.fontFam};
    font-size: clamp(0.625rem, 2.5vw, 1.25rem);
    background-color: ${theme.colors.dark};
    padding: 10px 5px;
    position: relative;
    z-index: 1;
`

const ArticleWrapper = styled.article`
    width: 100%;
    max-width: 1216px;
    margin: 80px auto;
`

const ArticleImage = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
    object-position: center 17%;
    border: 2px solid ${theme.colors.dark};
    @media screen and (${devices.laptop}) {
        height: 230px;
    }
`

const ArticleMainText = styled.div`
    font-family: ${theme.heading.fontFam};
    text-align: center;
    margin: 30px auto;
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

const BorderButton = styled.button`
    width: 100%;
    font-size: clamp(0.8rem, 2.5vw, 1rem);
    font-family: ${theme.heading.fontFam};
    background-color: transparent;
    border: 2px solid ${theme.colors.dark};
    padding: 10px 0;
    @media screen and (${devices.tablet}) {
        width: 190px;
    }
` 

const SolidButton = styled(BorderButton)`
    color: ${theme.colors.grayishWhite};
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

export { WorkTexts, CardFlex, CardsWrapper, CardImg, Overlay, ReadButton, DetailsWrapper, ArticleWrapper, ArticleImage, ArticleMainText, FlexButtons, BorderButton, SolidButton, SubTopics }