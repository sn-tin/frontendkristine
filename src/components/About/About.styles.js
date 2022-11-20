import styled from "styled-components";
import { devices, theme } from "../../styles";

const StyleAbout = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    h1 {
        font-size: ${theme.heading.smaller};
        margin-bottom: 20px;
    }
    @media screen and (${devices.laptop}) {
        flex-direction: row;
    }
`

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    h2 {
        font-size: ${theme.heading.sub};
        font-family: ${theme.heading.fontFam};
        font-weight: ${theme.fontWeights.medium};
        margin-bottom: 15px;
    }
    p {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
    }
`

const AboutPersonal = styled.div`
    @media screen and (${devices.laptop}) {
        width: 767px;
    }
`

const AboutTools = styled.div`
    @media screen and (${devices.laptop}) {
        width: 285px;
    }
`

export { StyleAbout, AboutContent, AboutPersonal, AboutTools }