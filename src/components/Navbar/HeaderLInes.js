import { HeaderLine, HeaderLine1, HeaderLine2, HeaderLine3, } from './Navbar.style';
import { linesAnimate } from '../../animations';

const HeaderLines = () => {
    return (
        <HeaderLine variants={linesAnimate} initial="start" animate="end">
            <HeaderLine1 className='header-line-1'></HeaderLine1>
            <HeaderLine2 className='header-line-2'></HeaderLine2>
            <HeaderLine3 className='header-line-3'></HeaderLine3>
        </HeaderLine>
    )
}

export default HeaderLines;