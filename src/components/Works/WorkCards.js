import { CardsWrapper, CardImg, Overlay, ReadButton, DetailsWrapper } from "./Works.styles";
import { motion } from "framer-motion";

const Cards = ({data}) => {
    const { id, img, name, date } = data;
    const className = `work-img-${id}`
    return (
        <CardsWrapper className="work-cards">
            <div id={id} className={className} style={{position: "relative", overflow: "hidden"}}>
                <CardImg src={img} alt={name} />
                <Overlay className="overlay">
                    <ReadButton>Read More</ReadButton>
                </Overlay>
            </div>
            <DetailsWrapper className="name-date">
                <span>{name}</span>
                <span>{date}</span>
            </DetailsWrapper>
        </CardsWrapper>
    )
}

export default Cards;