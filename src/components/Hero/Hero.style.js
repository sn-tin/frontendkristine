import { motion } from "framer-motion";
import styled from "styled-components";
import { DefaultStyle, devices, theme } from "../../styles";

const StyledHero = styled(DefaultStyle)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto 50px;
    padding: 0 20px;
    @media screen and (${devices.tablet}) {
        flex-direction: row;
        z-index: -1;
        padding: 50px;
    }
`

const Content = styled(motion.div)`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    .left-aligned {
        .name {
            color: ${theme.colors.fadeBlack};
            font-size: clamp(1.1rem, 2vw, 1.5rem);
            font-family: ${theme.heading.fontFam};
            font-weight: ${theme.fontWeights.semiBold};
        }
        h1 {
            font-size: clamp(2.7rem,10vw,6rem);
            margin: 20px 0;
        }
        .description {
            width: 100%;
            max-width: 900px;
            font-family: ${theme.text.fontFam};
            font-size: clamp(0.9rem, 2.5vw, 1.3rem);
            font-weight: ${theme.fontWeights.medium};
            margin-top: 50px;
            line-height: 1.5;
        }
    }
    .links {
        display: flex;
        gap: 15px;
        margin-top: 30px;
    }
`

export { StyledHero, Content };