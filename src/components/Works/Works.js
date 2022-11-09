import works from "./worksData";
import Cards from "./WorkCards";
import { WorkTexts, CardFlex } from "./Works.styles";
import NoContext from "./NoContext";
import Shortly from "./Shortly";
import ToDo from "./ToDo";
import RockPaperScissor from "./RockPaperScissor"

const Works = () => {
    const workCards = works.map((work) => {
        return (
            <Cards key={work.id} data={work} />
        )
    })

    return (
        <section className="works">
            <WorkTexts className="title-description">
                <h1>Works</h1>
                <p>Check out the documentations for some of the learning projects I’ve made where I was able to to use the skills I developed learning front-end tech stacks.</p>
            </WorkTexts>
            <CardFlex className="cards-flex">
                {workCards}
            </CardFlex>
            <RockPaperScissor />
        </section>
    )
}

export default Works;