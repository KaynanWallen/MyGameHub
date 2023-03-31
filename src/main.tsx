import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'

import { ColorsThema, GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={ColorsThema}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
