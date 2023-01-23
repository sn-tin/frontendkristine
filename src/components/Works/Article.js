import { ArticleWrapper, ArticleImage, ArticleMainText, FlexButtons, BorderButton, SolidButton, SubTopics } from "./Works.styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import worksData from "./worksData";

const Article = () => {
    const { slug } = useParams();
    console.log(slug)

    const [article, setArticle] = useState(null);

    let findData = worksData.find(data => data.slug === slug);

    useEffect(() => {
        setArticle(findData)
        console.log(findData)
    }, [findData])

    return (
        <>
        <ArticleWrapper id={article?.id}>
            <ArticleImage src={article?.img} alt={article?.name} />
            <ArticleMainText  className="main-text">
                <span>{article?.category} / {article?.date}</span>
                <h1>{article?.name}</h1>
                <p>A website where users can search for, copy-paste and bookmark Filipino memes in a form of text.</p>
                <FlexButtons>
                    <BorderButton href={article?.codeURL} target="_blank">Code</BorderButton >
                    <SolidButton href={article?.demoURL} target="_blank">Demo</SolidButton >
                </FlexButtons>
            </ArticleMainText >
            {
                article?.description.map((desc) => (
                    <SubTopics key={desc}>
                        {/* <h2>{title}</h2> */}
                        <p>{desc}</p>
                    </SubTopics>
                ))
            }
        </ArticleWrapper>
        </>
    )
}

export default Article;