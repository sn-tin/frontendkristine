import styled from "styled-components";
import { DefaultStyle, devices, theme } from "../../styles";
import { motion } from "framer-motion";

const StyleAbout = styled(DefaultStyle)`
    width: 100%;
    max-width: 1300px;
    display: block;
    align-items: center;
    margin: 0 auto;
    padding: 50px 20px;
    h2 {
        font-family: ${theme.heading.fontFam};
        font-size: clamp(2rem, 5vw, 4rem);
        text-align: center;
        text-transform: uppercase;
        line-height: 1.5;
    }
    @media screen and (${devices.laptop}) {
        flex-direction: row;
        gap: 30px;
        padding: 100px 50px 200px;
    }
`

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
    p {
        font-size: clamp(0.8rem, 2.5vw, 1rem);
        margin-bottom: 40px;
        line-height: 2.1;
    }
    @media screen and (${devices.laptop}) {
        flex-direction: row;
    }
`
const AboutImage = styled.div`
    padding: 30px;
    img {
        width: 100%;
        max-width: 320px;
        border: 2px solid #000000;
    }
    @media screen and (${devices.laptop}) {
        width: 100%;
    }
`
const AboutPersonal = styled(motion.div)`
    p {
        text-align: justify;
    }
`

const AboutTools = styled(AboutPersonal)`
    p {
        margin-bottom: 30px;
    }
    div {
        display: flex;
        align-items: center;
        font-family: ${theme.text.fontFam};
        font-size: clamp(0.8rem, 2.5vw, 0.9rem);
        font-weight: ${theme.fontWeights.semiBold};
        img {
            width: 10px;
            height: 10px;
            margin-right: 5px;
        }
    }
    @media screen and (${devices.laptop}) {
        div {
            grid-template-columns: repeat(4, auto);
        }
    }
`

export { StyleAbout, AboutContent, AboutImage, AboutPersonal, AboutTools }