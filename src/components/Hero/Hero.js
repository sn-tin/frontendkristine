import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Content, HomeButton, HomeImage, StyledHero } from './Hero.style';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { leftAnimate, rightAnimate, spanAnimate } from '../../animations';
import kristineIMG from "../../assets/kristine-img.jpg"

const Home = ({works}) => {
    const navigate = useNavigate();

    const seeWorksClicked = () => {
        navigate('/works')
    }

    return (
        <StyledHero id='hero'>
            <Content 
                variants={leftAnimate}
                initial="start"
                animate="end"
                exit="exit"
            >
                <div className='left-aligned'>
                    <h1 className='hero-tile'>Hi there,<br/><span>I'm Kristine May!</span></h1>
                    <p className='description'>Knowledgeable in front-end tech stacks such as HTML, CSS, and JavaScript (ReactJS).<br/>
                    I can implement web pages from design or concept through deployment with a responsive and mobile-first approach and strategy.</p>
                </div>
            </Content>
        </StyledHero>
    )
}

export default Home;