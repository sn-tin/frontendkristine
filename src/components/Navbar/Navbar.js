import { StyledNavbar, 
        HamburgerMenu, 
        Lines, 
        LargeScreenNav, 
        SmallScreenNav,
        NavInner
    } from './Navbar.style.js';
import { useState } from 'react';
import { menuAnimate } from '../../animations.js';
import { AnimatePresence } from 'framer-motion';
import HeaderLines from './HeaderLInes.js';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
    // Show star when nav link is active
    const [isActive] = useState(false);

    // Change text and lines color
    const [theme, setTheme] = useState("light");

    // Show and hide nav when clicked
    const [showNav, setShowNav] = useState(false);
    const showNavMenu = () => {
        setShowNav(!showNav)
        theme === "light" ? setTheme("dark") : setTheme("light")
    }
    const hideNavMenu = () => {
        setShowNav(false)
    }

    return (
        <nav>
            <StyledNavbar>
                <div className='nav-logo'>
                    <h1>KM.</h1>
                </div>
                <HeaderLines />
                <HamburgerMenu className='hamburger-menu' onClick={showNavMenu}>
                    <Lines className='line'></Lines>
                    <Lines className='line'></Lines>
                </HamburgerMenu>
                <LargeScreenNav>
                    <NavHashLink smooth to="/" className={isActive ? "active" : null} >Home</NavHashLink>
                    <NavHashLink smooth to="/#works" className={isActive ? "active" : null} >Works</NavHashLink>
                    <NavHashLink smooth to="/#about" className={isActive ? "active" : null} >About</NavHashLink>
                    <NavHashLink smooth to="/#footer" className={isActive ? "active" : null} >Contact</NavHashLink>
                </LargeScreenNav>
            </StyledNavbar>
            <AnimatePresence mode="wait">
                {
                    showNav && (
                        <SmallScreenNav variants={menuAnimate} initial="start" animate="end">
                            <NavInner>
                                <NavHashLink to="#hero" className={isActive ? "active" : null} onClick={hideNavMenu}>Home</NavHashLink>
                                <NavHashLink to="#works" className={isActive ? "active" : null} onClick={hideNavMenu}>Works</NavHashLink>
                                <NavHashLink to="#about" className={isActive ? "active" : null} onClick={hideNavMenu}>About</NavHashLink>
                                <NavHashLink to="#footer" className={isActive ? "active" : null} onClick={hideNavMenu}>Contact</NavHashLink>
                            </NavInner>
                        </SmallScreenNav>
                    )
                }
            </AnimatePresence>
        </nav>
    )
}

export default Navbar;