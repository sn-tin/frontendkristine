import { CardsWrapper, CardImg, Overlay, ReadButton, DetailsWrapper } from "./Works.styles";
import { Link } from "react-router-dom";

const Cards = ({works}) => {
    const { img, name, date, id, slug } = works;
    const className = `work-img-${id}`

    return (
            <CardsWrapper id={id} className="work-cards">
                <div className={className} style={{position: "relative", overflow: "hidden"}}>
                    <CardImg src={img} alt={name} />
                    <Overlay className="overlay">
                        <Link to={slug}>
                            <ReadButton>Read More</ReadButton>  
                        </Link>                      
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