import { linesAnimate } from "../../animations";
import { LefStraightLine, RightStraightLine, StraightLine, StyledDivider } from "./Divider.styles";

const Divider = () => {
    return (
        <StyledDivider>
            <StraightLine variants={linesAnimate} initial="start" animate="end">
                <LefStraightLine></LefStraightLine>
                <RightStraightLine></RightStraightLine>
            </StraightLine>
        </StyledDivider>
    )
}

export default Divider;