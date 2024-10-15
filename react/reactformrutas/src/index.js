import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from './components/Router';
import MennuRutas from './components/MennuRutas';
import FormSimple from './components/FormSimple';
import Collatz from './components/Collatz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>INDEX PRINCIPAL</h1>
    <MennuRutas />
    <hr/>
    <Collatz/>
    <hr/>
    <h2>PIE DE PAGINA</h2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
