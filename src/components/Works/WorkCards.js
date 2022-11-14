import { CardsWrapper, CardImg, Overlay, ReadButton, DetailsWrapper } from "./Works.styles";
import { useParams } from "react-router-dom";

const Cards = ({data}) => {
    const { img, name, date, id } = data;
    const className = `work-img-${id}`
    const { params } = useParams();

    console.log(id)

    return (
            <CardsWrapper id={params} className="work-cards">
                <div className={className} style={{position: "relative", overflow: "hidden"}}>
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