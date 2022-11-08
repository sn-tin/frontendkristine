import styled from "styled-components";
import { theme } from "../../styles";

const StyledContact = styled.div`
    width: 100%;
    max-width: 1246px;
    margin: 0 auto;
    h1 {
        font-size: ${theme.heading.smaller};
    }
    h2 {
        font-size: ${theme.heading.sub};
        font-weight: ${theme.fontWeights.medium};
        margin: 20px 0;
    }
    p {
        width: 100%;
        max-width: 500px;
        font-size: clamp(1.2rem, 2.5vw, 1.6rem);
        margin-bottom: 15px;
    }
    img {
        width: 25px;
    }
    span {
        color: ${theme.colors.fadeBlack};
        font-size: clamp(1rem, 2.5vw, 1.3rem);
        font-family: ${theme.text.fontFam};
        border-bottom: 1px solid ${theme.colors.fadeBlack};
    }
`

const FlexContact = styled.div`
    display: flex;
    align-content: center;
    gap: 10px;
    margin-bottom: 10px;
`

export { StyledContact, FlexContact }