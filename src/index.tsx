import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalContext } from './contexts/modalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ModalContext>
    <App />
  </ModalContext>,
);

reportWebVitals();
