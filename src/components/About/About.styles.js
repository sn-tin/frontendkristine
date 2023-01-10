import styled from "styled-components";
import { DefaultStyle, devices, theme } from "../../styles";
import { motion } from "framer-motion";

const StyleAbout = styled(DefaultStyle)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 50px auto;
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
    }
`

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    p {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
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
`

export { StyleAbout, AboutContent, AboutPersonal, AboutTools }