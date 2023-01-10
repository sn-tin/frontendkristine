import Cards from "./WorkCards";
import { Carousel, WorkTexts, InnerCarousel, WorkContainer, WorksGrid, StyledWork } from "./Works.styles";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { leftAnimate, rightAnimate } from "../../animations";
import works from "./worksData";

const Works = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    const workCards = works.map((work) => {
        return (
            <Cards key={work.id} id={work.id} works={work} left={width} />
        )
    })

    return (
        <StyledWork>
            <WorkContainer className="works">
                <WorkTexts className="title-description">
                    <motion.h2 variants={rightAnimate} initial="start" animate="end" exit="exit">Explore my works</motion.h2>
                    <motion.p variants={rightAnimate} initial="start" animate="end" exit="exit">Check out the documentations for some of the learning projects I’ve made where I was able to to use the skills I developed learning front-end tech stacks.</motion.p>
                </WorkTexts>
                {/* <WorksGrid>
                    { works.map((work) => <Cards key={work.id} id={work.id} works={work} /> ) }
                </WorksGrid> */}
                <Carousel ref={carousel} variants={leftAnimate} initial="start" animate="end" exit="exit" className="carousel">
                    <InnerCarousel drag="x" dragConstraints={{right: 0, left: -width }} className="inner-carousel">
                    {workCards}
                    </InnerCarousel>
                </Carousel>
            </WorkContainer>
        </StyledWork>
    )
}

export default Works;