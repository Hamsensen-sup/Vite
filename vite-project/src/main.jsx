import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Quotes from './Quotes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Quotes />
  </StrictMode>,
)
