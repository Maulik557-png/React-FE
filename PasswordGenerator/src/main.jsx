import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Claude_App from './Claude_App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Claude_App />
  </StrictMode>,
)
