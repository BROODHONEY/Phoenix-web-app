import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PhoenixLanding from './components/PhoenixLanding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhoenixLanding />
  </StrictMode>,
)
