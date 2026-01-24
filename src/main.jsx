import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App.jsx';
import CryptoContextProvider from './context-api/CryptoContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CryptoContextProvider>
      <App />
    </CryptoContextProvider>
  </BrowserRouter>,
)
