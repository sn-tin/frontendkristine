import styled from "styled-components";
import { devices, theme } from "../../styles";

const Content = styled.div`
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    span {
        color: ${theme.colors.fadeBlack};
        font-size: clamp(1.1rem, 2vw, 1.5rem);
        font-family: ${theme.heading.fontFam};
        font-weight: ${theme.fontWeights.semiBold};
        text-transform: uppercase;
    }
    h1 {
        font-size: clamp(2.5rem,5vw,8rem);
    }
    p {
        width: 100%;
        max-width: 800px;
        font-size: clamp(1.3rem, 2.5vw, 1.3rem);
        font-weight: ${theme.fontWeights.medium};
        /* margin: 0 auto; */
    }
    /* @media screen and (${devices.laptop}) {
        p {
            margin: 0 auto;
        }
    } */
`

const HomeButton = styled.button`
    font-family: ${theme.heading.fontFam};
    font-size: clamp(0.938rem, 2.5vw, 1.3rem);
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

export { Content, HomeButton };