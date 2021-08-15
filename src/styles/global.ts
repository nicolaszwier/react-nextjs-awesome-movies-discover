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

  /* pagination */
  .pagination {

  
  ul {
    display: flex;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
  }

  li {
    padding: 0.2rem 0.5rem;
    margin: 0 0.1rem;
    cursor: pointer;
    display: inline-block;
    background: var(--backgroundContrast);
    border-radius: 4px;
    font-size: 1.1rem;

    :hover {
      filter: brightness(0.9);
    }
  }
  .selected {
  background: var(--primary);
  color: white;
}
}

  
`

export default GlobalStyles
