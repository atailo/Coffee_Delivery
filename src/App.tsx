import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
