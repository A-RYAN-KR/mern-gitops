import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@/index.css';
import { ToastContainer } from 'react-toastify';

// Force dark mode globally
document.documentElement.classList.add('dark');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
