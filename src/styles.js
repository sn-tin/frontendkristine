import styled, { createGlobalStyle } from 'styled-components';

const theme = {
    backgroundColor: "#E8EBE8",
    heading: {
        color: "#343434",
        fontFam: `'Orbitron', sans-serif`
    },
    text: {
        color: "#3F3F3F",
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

const FontWeight = {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
}

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
  background-color: ${theme.backgroundColor};
}
h1, h2, h3, h4, h5, h6 {
  color: ${theme.heading.color};
  font-family: ${theme.heading.fontFam};
}
p {
  color: ${theme.text.color};
  font-family: ${theme.text.fontFam};
}
.App {
    width: 100%;
    max-width: 1246px;
    padding: 0 20px;
    margin: 0 auto;
}
`


export { GlobalStyle, theme, devices, FontWeight };