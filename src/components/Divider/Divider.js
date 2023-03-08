import { linesAnimate } from "../../animations";
import { LefStraightLine, RightStraightLine, StraightLine, StyledDivider } from "./Divider.styles";

const Divider = () => {
    return (
        <StyledDivider>
            <StraightLine variants={linesAnimate} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}>
                <LefStraightLine></LefStraightLine>
                <RightStraightLine></RightStraightLine>
            </StraightLine>
        </StyledDivider>
    )
}

export default Divider;