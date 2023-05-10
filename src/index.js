import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import {StockContextProvider} from './context/StockItemsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<AuthContextProvider>
      <StockContextProvider>

    <App />

      </StockContextProvider>
</AuthContextProvider>

  </React.StrictMode>
);

