import NoContext from "./NoContext";
import Shortly from "./Shortly";
import ToDo from "./ToDo";
import RockPaperScissor from "./RockPaperScissor"
import { Link, useParams } from "react-router-dom";

const WorkArticles = () => {
    const { id } = useParams();
    return (
        <>
            <NoContext />
        </>
    )
}

export default WorkArticles;