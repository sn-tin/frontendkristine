import worksData from "./worksData";
import { ArticleWrapper, ArticleImage, ArticleMainText, FlexButtons, BorderButton, SolidButton } from "./Works.styles";
const NoContext = () => {
    const { img, name, date, category } = worksData[0];
    return (
        <ArticleWrapper>
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
            <div>
                <h2>About the project</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. 
                Sagittis orci a scelerisque purus semper eget duis at. Sodales neque sodales ut etiam sit amet. Proin 
                sed libero enim sed faucibus turpis in eu mi. Blandit libero volutpat sed cras ornare arcu dui. Urna nunc 
                id cursus metus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Curabitur gravida 
                arcu ac tortor. Natoque penatibus et magnis dis parturient montes nascetur. Aliquet porttitor lacus luctus 
                accumsan tortor posuere ac ut. Aenean sed adipiscing diam donec adipiscing.
                </p>
            </div>
            <div>
                <h2>Process</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. 
                Sagittis orci a scelerisque purus semper eget duis at. Sodales neque sodales ut etiam sit amet. Proin 
                sed libero enim sed faucibus turpis in eu mi. Blandit libero volutpat sed cras ornare arcu dui. Urna nunc 
                id cursus metus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Curabitur gravida 
                arcu ac tortor. Natoque penatibus et magnis dis parturient montes nascetur. Aliquet porttitor lacus luctus 
                accumsan tortor posuere ac ut. Aenean sed adipiscing diam donec adipiscing.
                </p>
            </div>
            <div>
                <h2>Result</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. 
                Sagittis orci a scelerisque purus semper eget duis at. Sodales neque sodales ut etiam sit amet. Proin 
                sed libero enim sed faucibus turpis in eu mi. Blandit libero volutpat sed cras ornare arcu dui. Urna nunc 
                id cursus metus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Curabitur gravida 
                arcu ac tortor. Natoque penatibus et magnis dis parturient montes nascetur. Aliquet porttitor lacus luctus 
                accumsan tortor posuere ac ut. Aenean sed adipiscing diam donec adipiscing.
                </p>
            </div>
        </ArticleWrapper>
    )
}

export default NoContext;