import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/routing/router';

import "./styles/main.scss"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
)
