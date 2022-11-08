import { createGlobalStyle } from 'styled-components';

const theme = {
    colors: {
        grayishWhite: "#E8EBE8", 
        dark: "#343434", 
        fadeBlack: "#3F3F3F"
    },
    fontWeights: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900
    },
    heading: {
        bigger: "clamp(5rem,10vw,13.125rem)",
        smaller: "clamp(3.5rem,2vw,6.25rem)",
        sub: "clamp(1.6rem, 2.5vw, 2.5rem)",
        fontFam: `'Orbitron', sans-serif`
    },
    text: {
        fontFam: `'Nunito', sans-serif`
    }
}

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
    desktopL: `(min-width: ${sizes.desktop})`
}

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
  background-color: ${theme.colors.grayishWhite};
}
h1, h2, h3, h4, h5, h6 {
  color: ${theme.colors.dark};
  font-family: ${theme.heading.fontFam};
  text-transform: uppercase;
}
h2 {
    text-transform: capitalize !important;
}
p {
  color: ${theme.colors.fadeBlack};
  font-family: ${theme.text.fontFam};
}
.App {
    /* width: 100%;
    max-width: 1246px; */
    padding: 0 20px;
    margin: 0 auto;
}
`


export { GlobalStyle, theme, devices };