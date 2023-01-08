import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Content, HomeButton, HomeImage, StyledHome } from './Home.style';
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
        <StyledHome id='home'>
            <Content>
                <motion.div
                    variants={leftAnimate}
                    initial="start"
                    animate="end"
                    exit="exit"
                    className="left-aligned"
                >
                    <p>Kristine May de Jesus</p>
                    <h1 className='hero-tile'>A <motion.span variants={spanAnimate}>front-end developer</motion.span> from the Philippines</h1>
                </motion.div>
                <motion.div 
                    variants={rightAnimate}
                    initial="start"
                    animate="end"
                    exit="exit"
                    className="right-aligned">
                    <p>Turning ideas and designs into something useful is something that I love and enjoy to do!</p>
                    <HomeButton onClick={seeWorksClicked}>
                        See works 
                        <ArrowForwardIcon sx={{width: "30px", height: "30px", marginLeft: "10px"}} />
                    </HomeButton>
                </motion.div>
            </Content>
            <HomeImage>
                <img src={kristineIMG} alt="Kristine's image"/>
            </HomeImage>
        </StyledHome>
    )
}

export default Home;