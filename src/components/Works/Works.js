import Cards from "./WorkCards";
import { WorkContainer, StyledWork, OtherWorkLink } from "./Works.styles";
import works from "./worksData";
import { Grid } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { aboutPara1 } from "../../animations";

const Works = () => {
    const gridMdValue = (id) => {
        if (id === works.length && works.length % 2 !== 0) {
            return 12
        } else {
            return 6
        }
    }
    return (
        <>
        <StyledWork id="works">
            <WorkContainer className="works">
                <Grid container spacing={5}>
                    { works.map((work, index) => 
                        <Grid key={index} item xs={12} md={gridMdValue(work.id)} variants={aboutPara1} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}>
                            <Cards key={work.id} id={work.id} works={work} />
                        </Grid>).reverse()
                    }
                </Grid>
                <OtherWorkLink>
                    <a href="https://github.com/sn-tin/" target="_blank" rel="noopener noreferrer">See More Works <ArrowOutwardIcon /></a>
                </OtherWorkLink>
            </WorkContainer>
        </StyledWork>
        </>
    )
}

export default Works;