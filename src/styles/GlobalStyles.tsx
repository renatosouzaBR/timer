import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  :focus {
    outline: transparent !important;
    box-shadow: 0 0 0 1px ${(props) => props.theme['green-700']};
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
