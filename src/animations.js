import { theme } from "./styles"

/* NAVBAR AND FOOTER LINES ANIMATION */
const linesAnimate = {
    start: {
        transform: "scale3d(0, 0, 0)",
        transformStyle: "preserve-3d",
    },
    end: {
        transform: "scale3d(1, 1, 1)",
        transformStyle: "preserve-3d",
        transition: {
            duration: 1.1,
        }
    },
}
// Animation for small screen's nav menu
const menuAnimate = {
    start: {
        height: 0,
        opacity: 0,
    },
    end: {
        height: "100vh",
        opacity: 1,
        transition: {
            duration: .5
        }
    },
    exit: {
        opacity:0,
        height:0,
        transition: {
            ease:"easeInOut",
            delay: 0.2,
            duration: 0.3,
        }
    }
}
const navButtonAnimate1 = {
    close: {
        border: `1px solid ${theme.colors.dark}`,
        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
        transition: {
            duration: 0.5,
        }
    },
    open: {
        border: `1px solid ${theme.colors.grayishWhite}`,
        transform: "translate3d(0px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
        gap: 0,
        transition: {
            duration: 0.5,
        }
    },
}
const navButtonAnimate2 = {
    close: {
        border: `1px solid ${theme.colors.dark}`,
        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
        transition: {
            duration: 0.5,
        }
    },
    open: {
        border: `1px solid ${theme.colors.grayishWhite}`,
        transform: "translate3d(0px, -10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)",
        transition: {
            duration: 0.5,
        }
    }
}
/* Nav links animation */ 
const linkAnimate = {
    start: {
        opacity: 0,
        fontStyle: "normal",
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
        }
    },
    hover: {
        x: "20px",
        fontStyle: "italic",
        textDecoration: "line-through",
        transition: { duration: 0.5 },
    },
    exit: {
        opacity: 0,
        fontStyle: "normal",
    }
}
/* COMPONENT ANIMATIONS */
const heroAnimate = {
    start: {
        y: '20rem',
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.5,
        }
    },
}
/* ABOUT COMPONENT CONTENT ANIMATION */
const aboutPara1 = {
    start: {
        y: '2rem',
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.2,
        }
    },
}
const aboutPara2 = {
    start: {
        y: '2rem',
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.2,
        }
    },
}

export { linesAnimate, menuAnimate, heroAnimate, aboutPara1, aboutPara2, linkAnimate, navButtonAnimate1, navButtonAnimate2 }