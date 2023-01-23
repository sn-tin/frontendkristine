import Cards from "./WorkCards";
import { WorkTexts, WorkContainer, WorksGrid, StyledWork } from "./Works.styles";
import { motion } from "framer-motion";
import { rightAnimate } from "../../animations";
import Divider from "../Divider/Divider";
import works from "./worksData";

const Works = () => {
    return (
        <>
        <Divider />
        <StyledWork id="works">
            <WorkContainer className="works">
                <WorkTexts className="title-description">
                    <motion.h2 variants={rightAnimate} initial="start" animate="end" exit="exit">Explore my works</motion.h2>
                    <motion.p variants={rightAnimate} initial="start" animate="end" exit="exit">Check out the documentations for some of the learning projects I’ve made where I was able to to use the skills I developed learning front-end tech stacks.</motion.p>
                </WorkTexts>
                <WorksGrid> 
                    { works.map((work) => <Cards key={work.id} id={work.id} works={work} />) } 
                </WorksGrid>
            </WorkContainer>
        </StyledWork>
        </>
    )
}

export default Works;