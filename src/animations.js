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
            duration: 1,
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
            delay: 2,
            duration: 1.5
        }
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: {
            duration: 1
        }
    }
}

/* COMPONENT ANIMATIONS */
// 1. Left aligned text animation
const leftAnimate = {
    start: {
        x: '20rem',
    },
    end: {
        x: 0,
        transition: {
            type: 'spring',
            duration: 1.5,
        }
    },
    exit: {
        x: '100vw',
        transition: {
        }
    }
}
// 2. Right aligned text animation
const rightAnimate = {
    start: {
        x: '-20rem'
    },
    end: {
        x: 0,
        transition: {
            type: 'spring',
            duration: 1.5,
            when: 'beforeChildren'
        },
    },
    exit: {
        x: '-100vw'
    }
}
// 3. "Front-end Developer" italizes animation
const spanAnimate = {
    start: {
        fontStyle: 'normal'
    },
    end: {
        fontStyle: 'italic',
        transition: {
            delay: 1.4
        }
    }
}

/* ABOUT COMPONENT CONTENT ANIMATION */
const aboutSubHeading1 = {
    start: {
        y: '2rem',
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.5,
        }
    },
    exit: {
        x: '100vh',
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: 0.3,
        }
    }
}

const aboutPara1 = {
    start: {
        y: '2rem',
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.4,
            duration: 0.5,
        }
    },
    exit: {
        x: '100vh',
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: 0.2,
        }
    }
}

const aboutSubHeading2 = {
    start: {
        y: '2rem',
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.6,
            duration: 0.5,
        }
    },
    exit: {
        x: '100vh',
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: 0.1,
        }
    }
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
            delay: 0.8,
            duration: 0.5,
        }
    },
    exit: {
        x: '100vh',
        opacity: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export { linesAnimate, menuAnimate, leftAnimate, rightAnimate, spanAnimate, aboutSubHeading1, aboutPara1, aboutSubHeading2, aboutPara2 }