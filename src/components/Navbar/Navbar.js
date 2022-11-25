import { StyledNavbar, 
        HamburgerMenu, 
        Lines, 
        LargeScreenNav, 
        SmallScreenNav,
        NavInner
    } from './Navbar.style.js';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { menuAnimate } from '../../animations.js';
import { AnimatePresence } from 'framer-motion';
import HeaderLines from './HeaderLInes.js';

const Navbar = () => {
    const [isActive] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const showNavMenu = () => {
        setShowNav(!showNav)
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
                    <Lines className='line'></Lines>
                </HamburgerMenu>
                <LargeScreenNav>
                    <NavLink to="/" className={isActive ? "active" : null} >Home</NavLink>
                    <NavLink to="/works" className={isActive ? "active" : null} >Works</NavLink>
                    <NavLink to="/about" className={isActive ? "active" : null} >About</NavLink>
                    <NavLink to="/contact" className={isActive ? "active" : null} >Contact</NavLink>
                </LargeScreenNav>
            </StyledNavbar>
            <AnimatePresence exitBeforeEnter>
                {
                    showNav && (
                    <SmallScreenNav variants={menuAnimate} initial="start" animate="end">
                        <NavInner>
                            <NavLink to="/" className={isActive ? "active" : null} onClick={hideNavMenu}>Home</NavLink>
                            <NavLink to="/works" className={isActive ? "active" : null} onClick={hideNavMenu}>Works</NavLink>
                            <NavLink to="/about" className={isActive ? "active" : null} onClick={hideNavMenu}>About</NavLink>
                            <NavLink to="/contact" className={isActive ? "active" : null} onClick={hideNavMenu}>Contact</NavLink>
                        </NavInner>
                    </SmallScreenNav>
                    )
                }
            </AnimatePresence>
        </nav>
    )
}

export default Navbar;