import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/components/Hero.css';

const Hero = () => {
  const { lang, content } = useLanguage();
  const { title, sectionLabel, subtitle, affiliation, description, stats } = content.hero;

  return (
    <section id="hero" className="hero" aria-label={sectionLabel}>
      {/* 센서 그리드 배경 */}
      <div className="hero-grid" aria-hidden="true" />

      {/* 도로 원근 비주얼 (CSS-only) */}
      <div className="hero-road" aria-hidden="true">
        <div className="hero-road-lane hero-road-lane--left-outer" />
        <div className="hero-road-lane hero-road-lane--left" />
        <div className="hero-road-lane hero-road-lane--right" />
        <div className="hero-road-lane hero-road-lane--right-outer" />
        <div className="hero-road-dash" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {affiliation && <p className="hero-affiliation">{affiliation}</p>}
        <div className="hero-divider" aria-hidden="true" />
        <p className="hero-description">{description}</p>

        {stats && stats.length > 0 && (
          <dl className="hero-stats" aria-label={lang === 'ko' ? '주요 지표' : 'Key metrics'}>
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <dt className="hero-stat-label">{stat.label}</dt>
                <dd className="hero-stat-value">{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  );
};

export default Hero;
