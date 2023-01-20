import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import App from './App';
import { createGlobalStyle ,ThemeProvider} from 'styled-components';
import StateProvider from './components/StateProvider';
import { BrowserRouter } from 'react-router-dom';

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
      <ThemeProvider theme={theme} >
        <GlobalStyle/>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </ThemeProvider>

    
)
