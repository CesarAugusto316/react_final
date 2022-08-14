import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, TodosProvider, AuthProvider } from './contexts';
import { App } from './App';
import './index.css';


ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <AuthProvider>
        <TodosProvider>
          <ThemeProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </TodosProvider>
      </AuthProvider>
    </React.StrictMode>,
  );
