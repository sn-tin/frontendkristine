import { motion } from "framer-motion";
import styled from "styled-components";
import { DefaultStyle, devices, theme } from "../../styles";

const StyledHome = styled(DefaultStyle)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 0 20px;
    @media screen and (${devices.tablet}) {
        flex-direction: row;
        z-index: -1;
        padding: 20px;
    }
`

const Content = styled(motion.div)`
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
            font-size: clamp(2.5rem,5vw,5rem);
            margin: 20px 0;
        }
    }
    .right-aligned {
        p {
            width: 80%;
            max-width: 800px;
            font-size: clamp(1rem, 2.5vw, 1.3rem);
            font-weight: ${theme.fontWeights.medium};
        }
        @media screen and (${devices.laptop}) {
            p {
                width: 65%;
            }
        }
    }
`
const HomeImage = styled(motion.div)`
    z-index: -1;
    img {
        width: 100%;
        border-radius: 10px 100px 10px;
        @media screen and (${devices.laptop}) {
            width: 100%;
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