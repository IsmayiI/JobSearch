import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './reset.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CompaniesContextProvider } from './context/CompaniesContext.jsx'
import { ModeContextProvider } from './context/ModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <React.StrictMode>
         <ModeContextProvider>
            <CompaniesContextProvider>
               <App />
            </CompaniesContextProvider>
         </ModeContextProvider>
      </React.StrictMode>
   </BrowserRouter>
   ,
)
