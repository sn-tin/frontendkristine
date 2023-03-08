import { Content, StyledHero } from './Hero.style';
import { heroAnimate } from '../../animations';

const Home = ({works}) => {
    return (
        <StyledHero id='hero'>
            <Content 
                variants={heroAnimate}
                initial="start"
                animate="end"
                exit="exit"
            >
                <div className='left-aligned'>
                    <h1 className='hero-tile'>Hi there,<br/><span className='low-highlight'>I'm Kristine May!</span></h1>
                    <p className='description'>Knowledgeable in front-end tech stacks such as HTML, CSS, and JavaScript (ReactJS).<br/>
                    I can implement web pages from design or concept through deployment with a responsive and mobile-first approach and strategy.</p>
                </div>
            </Content>
        </StyledHero>
    )
}

export default Home;