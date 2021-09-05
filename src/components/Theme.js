import React from "react"

import { ThemeProvider, createGlobalStyle } from "styled-components"

const mainTheme = {
  color: {
    white: "#fff",
    black: "#1F1D1D",
    boundaryWhite: "hsl(0, 0%, 100%, 16%)",
    boundaryBlack: "hsl(0, 6%, 13%, 16%)",
    gray: "#4D4949",
    whiteGray: "#E5DCDC",
    primary: "#b50824",
    secondary: "#ffc000",
  },
  font: {
    body: "Noto Sans JP",
    title: "Quattrocento",
    hero: "Oswald",
  },
  fontsize: {
    button: "1rem",
    caption: "0.875rem",
    body: "1rem",
    subheading: "1.25rem",
    title: "1.5rem",
    heading: "2rem",
    display1: "2.5rem",
    hero: "4rem",
    superhero: "7.875rem",
  },
  breakpoint: {
    mobile: "only screen and (min-width: 768px)",
    tablet: "only screen and (min-width: 900px)",
  },
  spacing: {
    $1: "0.5rem", ///8px
    $2: "1rem", ////16px
    $3: "1.5rem", //24px
    $4: "2.5rem", //40px
    $5: "4rem", ////64px
    lg: "6.5rem", //104px
    xlg: "10.5rem", //168px
  },
  btn: {
    size: "0.5rem 2.5rem",
  },
  shadow: {
    shadow1: "4px 4px 4px hsl(0, 6%, 13%, 16%)",
    shadow2: "0 0 2px hsl(0, 6%, 13%, 16%)",
  },
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
body {
  overflow-x: hidden;
  background: ${props => props.theme.color.white};
  color: ${({ theme }) => theme.color.black};
  font-family: ${({ theme }) => theme.font.text}, sans-serif;
}
h1,h2,h3,h4,h5 {
  font-weight: 700;
}
h1 {
  margin: ${({ theme }) => theme.spacing.$4} 0 ${({ theme }) =>
  theme.spacing.$5};
  font-size: ${({ theme }) => theme.fontsize.hero};
  text-align: center;
}
h2 {
  font-size: ${({ theme }) => theme.fontsize.heading};
}
h3 {
  font-size: ${({ theme }) => theme.fontsize.title};
}
h4 {
  font-size: ${({ theme }) => theme.fontsize.subheading};
}
h5 {
  font-size: ${({ theme }) => theme.fontsize.body};
}
`
export default function Theme({ children }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
