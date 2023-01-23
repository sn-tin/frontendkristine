import { CardsWrapper, CardImg, Overlay, ReadButton, DetailsWrapper, CardImgWrapper } from "./Works.styles";
import { Link } from "react-router-dom";

const Cards = ({works}) => {
    const { img, name, date, id, codeURL, demoURL, slug } = works;

    return (
            <CardsWrapper id={id} className="work-cards">
                <CardImg src={img} alt={name} />
                <DetailsWrapper>
                    <div class="name-date">
                        <span>{name}</span>
                        <span>{date}</span>
                    </div>
                    <p>A website where users can search for, copy-paste and bookmark Filipino memes in a form of te xt.</p>
                    <div className="buttons">
                        <a href={codeURL} className="code-btn" target="_blank" rel="noreferrer">Code <i class="fa-brands fa-github"></i></a>
                        <a href={demoURL} className="demo-btn" target="_blank" rel="noreferrer">Demo <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i></a>
                    </div>
                </DetailsWrapper>
            </CardsWrapper>
    )
}

export default Cards;