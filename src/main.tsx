import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components';
import { App } from './App';
import './index.css';


ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>,
  );
