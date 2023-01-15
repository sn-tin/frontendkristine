import styled from "styled-components";
import { DefaultStyle, devices, theme } from "../../styles";
import { motion } from "framer-motion";

const StyleAbout = styled(DefaultStyle)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 5rem auto;
    padding: 0 20px;
    span {
        font-family: ${theme.heading.fontFam};
        font-size: clamp(1.1rem, 2.5vw, 1.3rem);
        text-transform: uppercase;
        margin-bottom: 20px;
        line-height: 1.5;
        h2 {
            font-size: ${theme.heading.sub};
        }
    }
    @media screen and (${devices.laptop}) {
        flex-direction: row;
        gap: 50px;
        margin: 10rem auto;
    }
`

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    p {
        font-size: clamp(0.8rem, 2.5vw, 1rem);
        margin-bottom: 40px;
    }
    @media screen and (${devices.laptop}) {
        width: 50%;
    }
`

const AboutPersonal = styled(motion.div)`
    width: 100%;
    text-align: justify;
`

const AboutTools = styled(AboutPersonal)`
    width: 100%;
    p {
        margin-bottom: 30px;
    }
    div {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        p {
            font-size: 0.8rem;
            font-weight: ${theme.fontWeights.semiBold};
            text-align: center;
            border: 1px solid black;
            padding: 8px;
            margin-bottom: 0;
        }
    }
    @media screen and (${devices.laptop}) {
        div {
            grid-template-columns: repeat(4, auto);
        }
    }
`

export { StyleAbout, AboutContent, AboutPersonal, AboutTools }