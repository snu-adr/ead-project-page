import React from 'react';
import content from '../data/content.json';
import '../styles/components/Hero.css';

const Hero = () => {
  const { title, subtitle, affiliation, description } = content.hero;

  return (
    <section id="hero" className="hero">
      {/* 센서 그리드 배경 */}
      <div className="hero-grid" aria-hidden="true" />

      {/* 도로 원근 비주얼 (CSS-only) */}
      <div className="hero-road">
        <div className="hero-road-lane hero-road-lane--left-outer" />
        <div className="hero-road-lane hero-road-lane--left" />
        <div className="hero-road-lane hero-road-lane--right" />
        <div className="hero-road-lane hero-road-lane--right-outer" />
        <div className="hero-road-dash" />
        <div className="hero-road-glow" />
      </div>

      {/* 플로팅 파티클 */}
      <div className="hero-particles" aria-hidden="true">
        <div className="hero-particle hero-particle--1" />
        <div className="hero-particle hero-particle--2" />
        <div className="hero-particle hero-particle--3" />
        <div className="hero-particle hero-particle--4" />
        <div className="hero-particle hero-particle--5" />
        <div className="hero-particle hero-particle--6" />
      </div>

      {/* BEV 레이더 비주얼 — 타이틀 뒤 */}
      <div className="hero-radar" aria-hidden="true">
        <div className="hero-radar-ring hero-radar-ring--1" />
        <div className="hero-radar-ring hero-radar-ring--2" />
        <div className="hero-radar-ring hero-radar-ring--3" />
        <div className="hero-radar-cross" />
        <div className="hero-radar-scan" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {affiliation && <p className="hero-affiliation">{affiliation}</p>}
        <div className="hero-divider" />
        <p className="hero-description">{description}</p>
      </div>

      <div className="hero-bottom-fade" />

      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
