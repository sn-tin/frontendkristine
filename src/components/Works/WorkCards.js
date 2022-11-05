const Cards = ({data}) => {
    const { id, img, name, date } = data;
    return (
        <div className="work-cards">
            <div id={id} className={"work"-{id}}
                style={
                    {
                        backgroundImage: {img},
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }
                }
            >
                <div className="overlay">
                    <button style={{textTransform: "uppercase"}}>Read More</button>
                </div>
            </div>
            <div className="name-date">
                <span>{name}</span>
                <span>{date}</span>
            </div>
        </div>
    )
}

export default Cards;