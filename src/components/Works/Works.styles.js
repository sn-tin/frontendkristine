import styled from "styled-components";
import { devices, FontWeight, theme } from "../../styles";

const CardFlex = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (${devices.laptop}) {
       flex-direction: row;
    }
`

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    margin: 20px 0 0 auto;
    border: 2px solid ${theme.heading.color};
    @media screen and (${devices.laptop}) {
        flex-direction: column;
        width: 527px;
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
    color: ${theme.backgroundColor};
    font-size: clamp(0.5rem, 2.5vw, 1.125rem);
    font-weight: ${FontWeight.bold};
    padding: 10px 15px;
    border: none;
    background-color: ${theme.heading.color};
`

const DetailsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${theme.backgroundColor};
    font-family: ${theme.heading.fontFam};
    font-size: clamp(0.625rem, 2.5vw, 1.25rem);
    background-color: ${theme.heading.color};
    padding: 10px 5px;
    position: relative;
    z-index: 1;
`

export { CardFlex, CardsWrapper, CardImg, Overlay, ReadButton, DetailsWrapper }