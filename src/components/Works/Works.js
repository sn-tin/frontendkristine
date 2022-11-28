import Cards from "./WorkCards";
import { Carousel, WorkTexts, InnerCarousel, StyledWorks } from "./Works.styles";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { leftAnimate, rightAnimate } from "../../animations";
import { Route, Routes } from "react-router-dom";
import Article from "./Article";

const Works = ({works}) => {
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
        <StyledWorks className="works">
            <WorkTexts className="title-description">
                <motion.h1 variants={rightAnimate} initial="start" animate="end" exit="exit">Works</motion.h1>
                <motion.p variants={rightAnimate} initial="start" animate="end" exit="exit">Check out the documentations for some of the learning projects I’ve made where I was able to to use the skills I developed learning front-end tech stacks.</motion.p>
            </WorkTexts>
            <Carousel ref={carousel} variants={leftAnimate} initial="start" animate="end" exit="exit" className="carousel">
                <InnerCarousel drag="x" dragConstraints={{right: 0, left: -width }} className="inner-carousel">
                    {workCards}
                </InnerCarousel>
                <h3>Swipe Left</h3>
            </Carousel>
            <Routes>
              <Route path="/works/no-context" element={<Article />} />
            </Routes>
        </StyledWorks>
    )
}

export default Works;