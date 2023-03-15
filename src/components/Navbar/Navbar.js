import { StyledNavbar, 
        HamburgerMenu, 
        Lines, 
        SmallScreenNav,
        NavInner
    } from './Navbar.style.js';
import { useState } from 'react';
import { linkAnimate, menuAnimate, navButtonAnimate1, navButtonAnimate2 } from '../../animations.js';
import { AnimatePresence } from 'framer-motion';
import HeaderLines from './HeaderLInes.js';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Navbar = () => {
    // Show and hide nav when clicked
    const [showNav, setShowNav] = useState(false);
    const showNavMenu = () => {
        setShowNav(!showNav)
    }
    useEffect(() => {
        document.querySelector("body").style.overflowY = showNav ? "hidden" : "visible";
    }, [showNav])

    return (
        <nav>
            <StyledNavbar>
                <h1>KM.</h1>
                <HeaderLines />
                <HamburgerMenu onClick={showNavMenu}>
                    <Lines variants={navButtonAnimate1} animate={showNav ? "open" : "close" }></Lines>
                    <Lines variants={navButtonAnimate2} animate={showNav ? "open" : "close" }></Lines>
                </HamburgerMenu>
            <AnimatePresence>
                {
                    showNav && (
                        <SmallScreenNav variants={menuAnimate} initial="start" animate="end" exit="exit">
                            <NavInner>
                                <motion.a variants={linkAnimate} href="#" initial="start" animate="animate" exit="exit" whileHover="hover" onClick={showNavMenu}>Home</motion.a>
                                <motion.a variants={linkAnimate} href="#works" initial="start" animate="animate" exit="exit" whileHover="hover" onClick={showNavMenu}>Works</motion.a>
                                <motion.a variants={linkAnimate} href="#about" initial="start" animate="animate" exit="exit" whileHover="hover" onClick={showNavMenu}>About</motion.a>
                                <motion.a variants={linkAnimate} href="#footer" initial="start" animate="animate" exit="exit" whileHover="hover" onClick={showNavMenu}>Contact</motion.a>
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