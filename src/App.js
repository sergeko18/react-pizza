import Header from './components/Header';
import './scss/app.scss';
import React from 'react';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import NotFound404 from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
