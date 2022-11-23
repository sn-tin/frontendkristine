/* NAVBAR AND FOOTER LINES ANIMATION */
const linesAnimate = {
    start: {
        transform: "translate3d(0px, 0px, 0px) scale3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
    },
    end: {
        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
        transition: {
            duration: 1.5,
        }
    }
}

/* HOME ANIMATIONS */
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

export { linesAnimate, leftAnimate, rightAnimate, spanAnimate }