import { CardsWrapper, CardImg, DetailsWrapper } from "./Works.styles";

const Cards = ({works}) => {
    const { img, name, date, id, codeURL, demoURL, description, role, status } = works;

    return (
            <CardsWrapper id={id} className="work-cards">
                <div className="status">
                    <p>{status}</p>
                </div>
                <CardImg src={img} alt={name} />
                <DetailsWrapper>
                    <div class="name-date">
                        <span>{name}</span>
                        <span>{date}</span>
                    </div>
                    <p className="role">{role}</p>
                    <p>{description}</p>
                    <div className="buttons">
                        <a href={codeURL} className="code-btn" target="_blank" rel="noreferrer">Code <i class="fa-brands fa-github"></i></a>
                        <a href={demoURL} className="demo-btn" target="_blank" rel="noreferrer">Demo <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i></a>
                    </div>
                </DetailsWrapper>
            </CardsWrapper>
    )
}

export default Cards;