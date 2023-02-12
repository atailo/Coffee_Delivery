import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.Text};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, textarea, button{
  font-family: 'Roboto', sans-serif;
  font-weight:400;
  font-size: 1rem;
}

`
