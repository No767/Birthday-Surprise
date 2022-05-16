import React from 'react'
import ReactDOM from 'react-dom/client'
import { Body } from './components/body'
import { Footer} from './components/footer'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import theme from './components/themes/theme'
import "@fontsource/Quicksand";
import { DarkMode, GlobalStyle } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <DarkMode>
        <GlobalStyle />
        <Body />
        <Footer />
      </DarkMode>
    </ChakraProvider>
  </React.StrictMode>
)
