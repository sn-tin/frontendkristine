import worksData from "./worksData";
import { ArticleWrapper, ArticleImage, ArticleMainText, FlexButtons, BorderButton, SolidButton, SubTopics } from "./Works.styles";
const Article = () => {
    const { id, img, name, date, category, subtopics } = worksData[0];
    return (
        <ArticleWrapper id={id}>
            <ArticleImage src={img} alt={name} />
            <ArticleMainText  className="main-text">
                <span>{category} / {date}</span>
                <h1>{name}</h1>
                <p>A website where users can search for, copy-paste and bookmark Filipino memes in a form of text.</p>
                <FlexButtons>
                    <BorderButton >Code</BorderButton >
                    <SolidButton >Demo</SolidButton >
                </FlexButtons>
            </ArticleMainText >
            {
                subtopics.map(({title, description}) => (
                    <SubTopics>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </SubTopics>
                ))
            }
        </ArticleWrapper>
    )
}

export default Article;