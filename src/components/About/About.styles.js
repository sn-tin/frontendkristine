import styled from "styled-components";
import { DefaultStyle, devices, theme } from "../../styles";
import { motion } from "framer-motion";

const StyleAbout = styled(DefaultStyle)`
    width: 100%;
    max-width: 1300px;
    display: block;
    align-items: center;
    margin: 0 auto;
    padding: 100px 20px;
    h2 {
        font-family: ${theme.heading.fontFam};
        font-size: clamp(2rem, 3vw, 4rem);
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 20px;
        line-height: 1.5;
    }
    @media screen and (${devices.laptop}) {
        flex-direction: row;
        gap: 50px;
    }
`

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin: 50px auto;
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
    width: 100%;
    margin: auto;
    padding: 30px;
    img {
        width: 100%;
        max-width: 400px;
        border: 2px solid #000000;
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
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        p {
            font-size: clamp(0.8rem, 2.5vw, 0.9rem);
            font-weight: ${theme.fontWeights.semiBold};
            padding: 5px;
            margin-bottom: 0;
            img {
                width: 10px;
                height: 10px;
                margin-right: 5px;
            }
        }
    }
    @media screen and (${devices.laptop}) {
        div {
            grid-template-columns: repeat(4, auto);
        }
    }
`

export { StyleAbout, AboutContent, AboutImage, AboutPersonal, AboutTools }