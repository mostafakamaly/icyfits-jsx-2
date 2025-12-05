import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Import the local assets stylesheet which currently imports the original CSS from /_original
import './assets/style.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
