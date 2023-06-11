import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { StockContextProvider } from './context/StockItemsContext';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import i18n from './i18n';

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

const RootComponent = () => {

  return (
    <Suspense fallback={loadingMarkup}>
      <AuthContextProvider>
        <StockContextProvider>
     

          <Router>

          <App />
          </Router>
    
        </StockContextProvider>
      </AuthContextProvider>
    </Suspense>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RootComponent />
    </I18nextProvider>
  </React.StrictMode>
);

