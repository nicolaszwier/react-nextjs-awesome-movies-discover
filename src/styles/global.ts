import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --background: rgb(255, 255, 255);
    --backgroundContrast: #F9F9F9;
    --primary: #5E1AB7;
    --primaryLight: #8758C4;
    --secondary: #ECC500;
    --textColorOnBackground: rgba(0, 0, 0, 0.85);
    --secondaryTextColor: rgba(0,0,0,0.65);
    --border: rgba(0,0,0,0.10)
  }

  
`

export default GlobalStyles
