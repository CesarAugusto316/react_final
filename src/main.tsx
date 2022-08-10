import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, TodosProvider } from './contexts';
import { App } from './App';
import './index.css';


ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <ThemeProvider>
        <TodosProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TodosProvider>
      </ThemeProvider>
    </React.StrictMode>,
  );
