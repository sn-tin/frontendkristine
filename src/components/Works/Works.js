import Cards from "./WorkCards";
import { WorkContainer, StyledWork } from "./Works.styles";
import { motion } from "framer-motion";
import { rightAnimate } from "../../animations";
import works from "./worksData";
import { Grid } from "@mui/material";

const Works = () => {
    return (
        <>
        <StyledWork id="works">
            <WorkContainer className="works">
                <Grid container spacing={5}>
                    { works.map((work) => 
                        <Grid item xs="12" lg={work.id === works.length ? "12" : "6"}>
                            <Cards key={work.id} id={work.id} works={work} />
                        </Grid>).reverse()
                    }
                </Grid>
            </WorkContainer>
        </StyledWork>
        </>
    )
}

export default Works;