import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <div className="feature-icon">🧺</div>
        <h3>Fresh, Clean & Wrinkle-Free</h3>
        <p>Fast Turnaround: Ready in just a few hours</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">✨</div>
        <h3>Quality Cleaning</h3>
        <p>Professional cleaning service with premium detergents, tough on stains</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">🚚</div>
        <h3>Convenient Delivery</h3>
        <p>Hassle-free pickup and delivery right to your door</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">💰</div>
        <h3>Affordable Pricing</h3>
        <p>Competitive rates that fit your budget without compromising quality</p>
      </div>
    </section>
  );
}

export default Features;
