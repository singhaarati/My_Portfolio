// Hero.js
import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate web developer with expertise in JavaScript, React, and Node.js.</p>
        <a href="#contact">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
