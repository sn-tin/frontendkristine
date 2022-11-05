import styled from "styled-components";
import { devices, FontWeight, theme } from "../../styles";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-size: clamp(5rem, 10vw, 13.125rem);
    }
    p {
        width: 100%;
        max-width: 909px;
        font-size: clamp(1.438rem, 5vw, 2.813rem);
        font-weight: ${FontWeight.bold};
        text-align: right;
        margin: 40px 0 40px auto;
    }
    @media screen and (${devices.laptop}) {
        p {
            margin: 53px 0 53px auto;
        }
    }
`

const HomeButton = styled.button`
    font-family: ${theme.heading.fontFam};
    font-size: clamp(0.938rem, 2.5vw, 1.563rem);
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 8px 15px;
    margin-left: auto;
    cursor: pointer;
    /* &:hover > svg {
        position: relative;
        left: 0.8rem;
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
    } */
    @media screen and (${devices.laptop}) {
        padding: 15px 30px;
    }
`

export { Content, HomeButton };