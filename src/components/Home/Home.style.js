import styled from "styled-components";
import { devices, theme } from "../../styles";

const Content = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1 {
        font-size: ${theme.heading.bigger};
    }
    p {
        width: 100%;
        max-width: 800px;
        font-size: clamp(1.438rem, 5vw, 2rem);
        font-weight: ${theme.fontWeights.bold};
        margin: 0 auto;
    }
    @media screen and (${devices.laptop}) {
        p {
            margin: 0 auto;
        }
    }
`

const HomeButton = styled.button`
    font-family: ${theme.heading.fontFam};
    font-size: clamp(0.938rem, 2.5vw, 1.3rem);
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 8px 15px;
    margin: 30px auto;
    cursor: pointer;
    @media screen and (${devices.laptop}) {
        padding: 15px 30px;
    }
`

export { Content, HomeButton };