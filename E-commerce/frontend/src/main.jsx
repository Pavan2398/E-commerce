import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="995599114093-so36janrr7q8380j90t5s193uh88c9ed.apps.googleusercontent.com">
    <BrowserRouter>
    <App />
    </BrowserRouter></GoogleOAuthProvider>;
    
  </StrictMode>,
)
