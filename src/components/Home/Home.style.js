import styled from "styled-components";
import { devices, theme } from "../../styles";

const Content = styled.div`
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    .left-aligned {
        p {
            color: ${theme.colors.fadeBlack};
            font-size: clamp(1.1rem, 2vw, 1.5rem);
            font-family: ${theme.heading.fontFam};
            font-weight: ${theme.fontWeights.semiBold};
            text-transform: uppercase;
        }
        h1 {
            font-size: clamp(2.5rem,5vw,8rem);
            margin: 20px 0;
        }
    }
    .right-aligned {
        p {
            width: 80%;
            max-width: 800px;
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            font-weight: ${theme.fontWeights.medium};
            text-align: right;
            margin-left: auto;
        }
        @media screen and (${devices.laptop}) {
            p {
                width: 65%;
            }
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
    margin: 30px 0 0 auto;
    cursor: pointer;
    @media screen and (${devices.laptop}) {
        padding: 15px 30px;
    }
`

export { Content, HomeButton };