import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HotelConstextProvider } from './context/HotelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HotelConstextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HotelConstextProvider>
);

