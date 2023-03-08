import Cards from "./WorkCards";
import { WorkContainer, StyledWork } from "./Works.styles";
import works from "./worksData";
import { Grid } from "@mui/material";

const Works = () => {
    const lgValue = (id) => {
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
                    { works.map((work) => 
                        <Grid item xs="12" md={lgValue(work.id)}>
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