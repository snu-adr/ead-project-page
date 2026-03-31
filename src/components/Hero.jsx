import React from 'react';
import content from '../data/content.json';
import '../styles/components/Hero.css';

const Hero = () => {
  const { title, subtitle, affiliation, description } = content.hero;

  return (
    <section id="hero" className="hero">
      {/* 도로 원근 비주얼 (CSS-only) */}
      <div className="hero-road">
        <div className="hero-road-surface" />
        <div className="hero-road-lane hero-road-lane--left-outer" />
        <div className="hero-road-lane hero-road-lane--left" />
        <div className="hero-road-lane hero-road-lane--right" />
        <div className="hero-road-lane hero-road-lane--right-outer" />
        <div className="hero-road-dash" />
        <div className="hero-road-glow" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {affiliation && <p className="hero-affiliation">{affiliation}</p>}
        <div className="hero-divider" />
        <p className="hero-description">{description}</p>

      </div>

      <div className="hero-scroll-indicator">
        <div className="hero-scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero;
