import styled, { createGlobalStyle } from 'styled-components';

const theme = {
    colors: {
        grayishWhite: "#FFFBF5", 
        dark: "#343434", 
        fadeBlack: "#3F3F3F",
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
        smaller: "clamp(3.5rem, 5vw, 4rem)",
        sub: "clamp(1.6rem, 2.5vw, 2.5rem)",
        fontFam: `'Cormorant Infant', serif`,
    },
    text: {
        fontFam: `'Montserrat', sans-serif`
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
html {
  scroll-behavior: smooth;
}
body {
    background-color: ${theme.colors.grayishWhite};
}
h1, h2, h3, h4, h5, h6 {
  color: ${theme.colors.dark};
  font-family: ${theme.heading.fontFam};
}
h2 {
    text-transform: none !important;
}
p {
  font-family: ${theme.text.fontFam};
}
.low-highlight {
    background: linear-gradient(120deg, #E3DFFD 0%, #E3DFFD 100%);
    background-repeat: no-repeat;
    background-size: 100% 40%;
    background-position: 0 110%;
}
`
const DefaultStyle = styled.section`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
`


export { GlobalStyle, theme, devices, DefaultStyle };