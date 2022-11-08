import styled from "styled-components";
import { devices, theme } from "../../styles";

const WorkTexts = styled.div`
    width: 100%;
    max-width: 1246px;
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

export { WorkTexts, CardFlex, CardsWrapper, CardImg, Overlay, ReadButton, DetailsWrapper }