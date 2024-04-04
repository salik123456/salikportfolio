import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MetaTags from './MetaTags'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MetaTags/>
    <App />
  </React.StrictMode>,
)
