import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 16px;
    min-width: 280px;
  }
  
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle