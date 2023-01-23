import styled from "styled-components";
import { DefaultStyle } from "../../styles";
import { HeaderLine, HeaderLine2, HeaderLine3 } from "../Navbar/Navbar.style";

const StyledDivider = styled(DefaultStyle)`
    position: relative;
    margin: 5rem auto;
    overflow-x: clip;
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