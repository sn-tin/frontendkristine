import styled from "styled-components";
import { devices, theme } from "../../styles";

const StyleAbout = styled.div`
    width: 100%;
    max-width: 1246px;
    margin: 0 auto 30px;
    h1 {
        font-size: ${theme.heading.smaller};
    }
`

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        font: ${theme.heading.sub} ${theme.heading.fontFam} ${theme.fontWeights.medium};
    }
    @media screen and (${devices.desktop}) {
        flex-direction: row;
    }
`

export { StyleAbout, AboutContent }