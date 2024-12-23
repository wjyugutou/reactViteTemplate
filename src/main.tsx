import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
