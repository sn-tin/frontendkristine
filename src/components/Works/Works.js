import works from "./worksData";
import Cards from "./WorkCards";
import { useState } from "react";

const Works = () => {

    const [worksData, setWorksData] = useState(works);

    const workCards = () => {
        setWorksData(
            worksData.map((work) => {
                return (
                    <Cards key={work.id} data={work} />
                )
            })
        )
    }

    return (
        <section className="works">
            <div className="title-description">
                <h1>Works</h1>
                <p>Check out the documentations for some of the learning projects I’ve made where I was able to to use the skills I developed learning front-end tech stacks.</p>
            </div>
            {/* {workCards} */}
        </section>
    )
}

export default Works;