import styled from "styled-components";
import { devices, theme } from "../../styles";

const StyledHome = styled.section`
    display: flex;
    flex-direction: column;
    @media screen and (${devices.laptop}) {
        flex-direction: row;
        z-index: -1;
    }
`

const Content = styled.div`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .left-aligned {
        p {
            color: ${theme.colors.fadeBlack};
            font-size: clamp(1.1rem, 2vw, 1.5rem);
            font-family: ${theme.heading.fontFam};
            font-weight: ${theme.fontWeights.semiBold};
            text-transform: uppercase;
        }
        h1 {
            font-size: clamp(2.5rem,5vw,6rem);
            margin: 20px 0;
        }
    }
    .right-aligned {
        p {
            width: 80%;
            max-width: 800px;
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            font-weight: ${theme.fontWeights.medium};
        }
        @media screen and (${devices.laptop}) {
            p {
                width: 65%;
            }
        }
    }
`
const HomeImage = styled.div`
    position: relative;
    img {
        width: 100%;
        @media screen and (${devices.laptop}) {
            position: absolute;
        }
    }
`
const HomeButton = styled.button`
    font-family: ${theme.heading.fontFam};
    font-size: clamp(0.8rem, 2.5vw, 1.2rem);
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 8px 15px;
    margin: 30px 0;
    cursor: pointer;
    @media screen and (${devices.laptop}) {
        padding: 15px 30px;
    }
`

export { StyledHome, Content, HomeImage, HomeButton };