import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Features />
            </>
          } />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<Navigate to="/coming-soon" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
