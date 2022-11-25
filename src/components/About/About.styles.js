import styled from "styled-components";
import { devices, theme } from "../../styles";
import { motion } from "framer-motion";

const StyleAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 50px auto;
    h1 {
        font-size: ${theme.heading.smaller};
        margin-bottom: 20px;
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
    h2 {
        font-size: ${theme.heading.sub};
        font-family: ${theme.heading.fontFam};
        font-weight: ${theme.fontWeights.medium};
        margin-bottom: 15px;
    }
    p {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        margin-bottom: 40px;
    }
    @media screen and (${devices.laptop}) {
        margin-top: 15px;
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