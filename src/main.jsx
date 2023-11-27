import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './utils/ThemeContext.jsx';

import Global_en from './lang/en.json';
import Global_fr from './lang/fr.json';
import Global_tr from './lang/tr.json';
import Global_ar from './lang/ar.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: Global_en,
    },
    fr: {
      global: Global_fr,
    },
    tr: {
      global: Global_tr,
    },
    ar: {
      global: Global_ar,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
