import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa o JavaScript do Bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa o CSS personalizado
import App from './App'; // Importa o componente App

// Cria a raiz para renderizar o App
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);