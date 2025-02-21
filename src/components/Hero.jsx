import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/coming-soon');
  };

  return (
    <section className="hero">
      <h1>Quick Laundry</h1>
      <p>Professional laundry service at your doorstep, making life easier one load at a time.</p>
      <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
    </section>
  );
}

export default Hero;
