import React from 'react';
import content from '../data/content.json';
import '../styles/components/Hero.css';

const Hero = () => {
  const { title, subtitle, description, highlights, ctaText, ctaHref } = content.hero;

  return (
    <section id="hero" className="hero">
      {/* BEV 센서 비주얼 (CSS-only) */}
      <div className="hero-bev">
        <div className="hero-bev-ring hero-bev-ring--1" />
        <div className="hero-bev-ring hero-bev-ring--2" />
        <div className="hero-bev-ring hero-bev-ring--3" />
        <div className="hero-bev-scan" />
        <div className="hero-bev-crosshair" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <p className="hero-description">{description}</p>

        {highlights && highlights.length > 0 && (
          <div className="hero-highlights">
            {highlights.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="hero-highlight-sep" />}
                <span className="hero-highlight-item">{item}</span>
              </React.Fragment>
            ))}
          </div>
        )}

        {ctaText && (
          <a href={ctaHref} className="hero-cta">
            {ctaText}
          </a>
        )}
      </div>

      <div className="hero-scroll-indicator">
        <div className="hero-scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero;
