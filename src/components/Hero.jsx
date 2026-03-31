import React from 'react';
import content from '../data/content.json';
import '../styles/components/Hero.css';

const Hero = () => {
  const { title, subtitle, description, highlights, ctaText, ctaHref } = content.hero;

  return (
    <section id="hero" className="hero">
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
