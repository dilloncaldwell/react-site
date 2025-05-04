import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HashRouter as BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/css/base.css';
import './assets/css/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-site">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
