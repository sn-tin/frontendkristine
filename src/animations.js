/* Navbar & Footer lines animation */
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

export { linesAnimate }