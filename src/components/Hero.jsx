import React from 'react';
import content from '../data/content.json';
import '../styles/components/Hero.css';

const Hero = () => {
  const { title, subtitle, description } = content.hero;

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <p className="hero-description">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
