import { StyledNavbar, 
        HamburgerMenu, 
        Lines, 
        SmallScreenNav,
        NavInner
    } from './Navbar.style.js';
import { useState } from 'react';
import { linkAnimate, menuAnimate } from '../../animations.js';
import { AnimatePresence } from 'framer-motion';
import HeaderLines from './HeaderLInes.js';
import { motion } from 'framer-motion';

const Navbar = () => {

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
                <h1>KM.</h1>
                <HeaderLines />
                <HamburgerMenu className='hamburger-menu' onClick={showNavMenu}>
                    <Lines className='line'></Lines>
                    <Lines className='line'></Lines>
                </HamburgerMenu>
            <AnimatePresence mode="wait">
                {
                    showNav && (
                        <SmallScreenNav variants={menuAnimate} initial="start" animate="end">
                            <NavInner>
                                <motion.a variants={linkAnimate} initial="initial" whileHover="hover" to="#hero" activeClassName="active" onClick={hideNavMenu}>Home</motion.a>
                                <motion.a variants={linkAnimate} initial="initial" whileHover="hover" to="#works" activeClassName="active" onClick={hideNavMenu}>Works</motion.a>
                                <motion.a variants={linkAnimate} initial="initial" whileHover="hover" to="#about" activeClassName="active" onClick={hideNavMenu}>About</motion.a>
                                <motion.a variants={linkAnimate} initial="initial" whileHover="hover" to="#footer" activeClassName="active" onClick={hideNavMenu}>Contact</motion.a>
                            </NavInner>
                        </SmallScreenNav>
                    )
                }
            </AnimatePresence>
            </StyledNavbar>
        </nav>
    )
}

export default Navbar;