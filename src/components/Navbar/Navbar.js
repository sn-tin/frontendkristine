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
import star from "../../assets/star.svg"

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
    const linkAnimate = {
        initial: {
            x: 0
        },
        hover: {
            x: "-10px",
            borderBottom: "1px solid #FFFFFF",
            transition: { duration: 0.5 },
        }
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
                                <NavHashLink  variants={linkAnimate} initial="initial" whileHover="hover" to="#hero" activeClassName="active" onClick={hideNavMenu}>Home</NavHashLink>
                                <NavHashLink  variants={linkAnimate} initial="initial" whileHover="hover" to="#works" activeClassName="active" onClick={hideNavMenu}>Works</NavHashLink>
                                <NavHashLink  variants={linkAnimate} initial="initial" whileHover="hover" to="#about" activeClassName="active" onClick={hideNavMenu}>About</NavHashLink>
                                <NavHashLink  variants={linkAnimate} initial="initial" whileHover="hover" to="#footer" activeClassName="active" onClick={hideNavMenu}>Contact</NavHashLink>
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