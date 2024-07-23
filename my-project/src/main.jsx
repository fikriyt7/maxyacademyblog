// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BlogDetail from './components/BlogDetail'; // Pastikan Anda memiliki komponen ini
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);