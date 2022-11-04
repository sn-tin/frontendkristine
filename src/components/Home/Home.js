import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Content, HomeButton } from './Home.style';

const Home = () => {
    const date = new Date();
    const year = date.getFullYear();
    const age = year - 2000;
    console.log(year)

    return (
        <Content id="home">
            <h1 className='hero-tile'>Hello!</h1>
            <div className='hero-text'>
                <p>I’m Kristine! A {age}-year-old front end developer based in the Philippines. </p>
                <HomeButton>See works 
                    <ArrowForwardIcon sx={{width: "30px", height: "30px", marginLeft: "10px"}} />
                </HomeButton>
            </div>
        </Content>
    )
}

export default Home;