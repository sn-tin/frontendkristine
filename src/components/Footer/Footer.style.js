import styled from "styled-components";
import { HeaderLine, HeaderLine1, HeaderLine2, HeaderLine3 } from "../Navbar/Navbar.style";
import { DefaultStyle, devices, theme } from "../../styles";


const StyledFooter = styled(DefaultStyle)`
   padding: 50px 0;
   overflow: hidden;
`
const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto);
    border: 1px solid black;
    padding: 40px;
    position: relative;
    @media screen and (${devices.laptop}) {
        grid-template-columns: repeat(3, 1fr);
    }
`
const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
`

const FooterLine = styled(HeaderLine)`
    top: -1.3rem;
    left: 8;
    padding: 40px 0 0;
    @media screen and (${devices.laptop}) {
        bottom: 5.5rem;
        right: 14rem;
    }
`

const FooterLine1 = styled(HeaderLine1)`
    width: 0;
    @media screen and (${devices.laptop}) {
        width: 30vh;
        left: -6.5rem;
        top: 9rem;
    }
`

const FooterLine2 = styled(HeaderLine2)`
    width: 65rem;
    bottom: 1.2rem;   
`

const FooterLine3 = styled(HeaderLine3)`
    left: 1.5rem;
    bottom: 1.2rem;
`

export { StyledFooter, FooterWrapper, FooterLinks, FooterLine, FooterLine1, FooterLine2, FooterLine3 }