import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import App2 from './App2';
import { createGlobalStyle ,ThemeProvider} from 'styled-components';
import { BrowserRouter } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
*{
  maring:0;
  padding:0;
  box-sizing: border-box;
}
 html,body{
  background-color: ${props => props.theme.colors.bg};
 }
 body{
  font-size:1.3rem;
 }
`
const theme = {
  colors:{
    primary: "coral",
    secondary: "#08002b",
    bg: "#220045"
  },
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <GlobalStyle/>
      <App2 />
      </ThemeProvider>
  </React.StrictMode>
    
)
