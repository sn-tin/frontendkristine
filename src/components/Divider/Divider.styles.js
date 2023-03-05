import styled from "styled-components";
import { DefaultStyle, devices } from "../../styles";
import { HeaderLine, HeaderLine2, HeaderLine3 } from "../Navbar/Navbar.style";

const StyledDivider = styled(DefaultStyle)`
    position: relative;
    margin: 10rem auto 0;
    overflow-x: clip;
    @media screen and (${devices.laptop}) {
        margin: 20rem auto 0;
    }
`
const StraightLine = styled(HeaderLine)`
    left: auto;
    right: 15rem;
`
const LefStraightLine = styled(HeaderLine2)`
    width: 65rem;
`
const RightStraightLine = styled(HeaderLine3)`
    width: 20rem;
`

export { StyledDivider, StraightLine, LefStraightLine, RightStraightLine }