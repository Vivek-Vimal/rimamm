import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    // background:  ${({ theme }) => theme.colors.background};
    background-size: auto 100%;
     background-image: url('/bg1.gif');  ${({ theme }) => theme.colors.backgroundImg};
    background-attachment: fixed; 
    background-position: center center;
    ${({ theme }) => theme.mediaQueries.nav} { 
      background-size: 100% 100%;
  }

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
