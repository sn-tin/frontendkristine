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
            duration: 1.5,
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
        height: "auto",
        opacity: 1,
        transition: {
            delay: 2,
            duration: 1.5
        }
    }
}

/* MAIN COMPONENT ANIMATIONS */
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
            duration: 1
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

export { linesAnimate, menuAnimate, leftAnimate, rightAnimate, spanAnimate }