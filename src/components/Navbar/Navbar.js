import { StyledNavbar, 
        HamburgerMenu, 
        Lines, 
        LargeScreenNav, 
        HeaderLine, 
        HeaderLine1,
        HeaderLine2,
        HeaderLine3, 
        SmallScreenNav
    } from './Navbar.style.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(true);
    const [showNav, setShowNav] = useState(false);

    const showNavMenu = () => {
        setShowNav(!showNav)
    }
    
    const navLinksClick = () => {
        setShowNav(false)
    }

    return (
        <nav>
            <StyledNavbar>
                <div className='nav-logo'>
                    <h1>Kristine May</h1>
                </div>
                <HeaderLine>
                    <HeaderLine1 className='header-line-1'></HeaderLine1>
                    <HeaderLine2 className='header-line-2'></HeaderLine2>
                    <HeaderLine3 className='header-line-3'></HeaderLine3>
                </HeaderLine>
                <HamburgerMenu className='hamburger-menu' onClick={showNavMenu}>
                    <Lines className='line'></Lines>
                    <Lines className='line'></Lines>
                    <Lines className='line'></Lines>
                </HamburgerMenu>
                <LargeScreenNav>
                    <Link to="/" className={isActive ? "active" : null}>Home</Link>
                    <Link to="/works" className={isActive ? "active" : null} >Works</Link>
                    <Link to="/about" className={isActive ? "active" : null} >About</Link>
                    <Link to="/contact" className={isActive ? "active" : null} >Contact</Link>
                </LargeScreenNav>
            </StyledNavbar>
            <SmallScreenNav style={{
                display: showNav ? "flex" : "none",
            }}>
                    <Link to="/" className='active' onClick={navLinksClick}>Home</Link>
                    <Link to="/works" className={isActive ? "active" : null} onClick={navLinksClick} >Works</Link>
                    <Link to="/about" className={isActive ? "active" : null} onClick={navLinksClick} >About</Link>
                    <Link to="/contact" className={isActive ? "active" : null} onClick={navLinksClick} >Contact</Link>
            </SmallScreenNav>
        </nav>
    )
}

export default Navbar;