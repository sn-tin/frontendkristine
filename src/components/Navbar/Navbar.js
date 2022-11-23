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
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isActive] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const showNavMenu = () => {
        setShowNav(!showNav)
    }

    const hideNavMenu = () => {
        setShowNav(false)
    }

    const linesAnimate = {
        start: {
            transform: "translate3d(0px, 0px, 0px) scale3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
        },
        end: {
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            transition: {
                duration: 1
            }
        }
    }

    return (
        <nav>
            <StyledNavbar>
                <div className='nav-logo'>
                    <h1>KM.</h1>
                </div>
                <HeaderLine variants={linesAnimate} initial="start" animate="end">
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
                    <NavLink to="/" className={isActive ? "active" : null} >Home</NavLink>
                    <NavLink to="/works" className={isActive ? "active" : null} >Works</NavLink>
                    <NavLink to="/about" className={isActive ? "active" : null} >About</NavLink>
                    <NavLink to="/contact" className={isActive ? "active" : null} >Contact</NavLink>
                </LargeScreenNav>
            </StyledNavbar>
            <SmallScreenNav style={{
                display: showNav ? "flex" : "none",
            }}>
                    <NavLink to="/" className={isActive ? "active" : null} onClick={hideNavMenu}>Home</NavLink>
                    <NavLink to="/works" className={isActive ? "active" : null} onClick={hideNavMenu}>Works</NavLink>
                    <NavLink to="/about" className={isActive ? "active" : null} onClick={hideNavMenu}>About</NavLink>
                    <NavLink to="/contact" className={isActive ? "active" : null} onClick={hideNavMenu}>Contact</NavLink>
            </SmallScreenNav>
        </nav>
    )
}

export default Navbar;