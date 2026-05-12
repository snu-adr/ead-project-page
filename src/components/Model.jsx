import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import architectureImg from '../assets/images/model_architecture.png';
import '../styles/components/Model.css';

const Model = () => {
  const { content } = useLanguage();
  const { sectionTitle, sectionTag, sectionSubtitle, comparison, architecture } = content.model;

  const refComparison = useScrollFadeIn();
  const refArchitecture = useScrollFadeIn();

  return (
    <div className="model-wrapper">
      <div className="model-grid-bg" aria-hidden="true" />
      <section id="model" aria-label={sectionTitle}>
        <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />

        <div className="model-comparison fade-in" ref={refComparison}>
          <h3>{comparison.title}</h3>

          <div className="comparison-cards" role="group" aria-label={comparison.title}>
            {/* Previous Research card — muted style */}
            <div className="comparison-card comparison-card--research">
              <div className="comparison-card__header">
                <h4 className="comparison-card__label">{comparison.researchLabel}</h4>
                <span className="comparison-card__badge">{comparison.researchBadge}</span>
              </div>
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul className="comparison-card__list" role="list" aria-label={comparison.researchLabel}>
                {comparison.items.map((item) => (
                  <li key={item.category} className="comparison-card__item">
                    <span className="comparison-card__category">{item.category}</span>
                    <span className="comparison-card__value">{item.research}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VS divider */}
            <div className="comparison-vs" aria-hidden="true">
              <div className="comparison-vs__line" />
              <span className="comparison-vs__text">VS</span>
              <div className="comparison-vs__line" />
            </div>

            {/* EAD card — bright accent style */}
            <div className="comparison-card comparison-card--ead">
              <div className="comparison-card__header">
                <h4 className="comparison-card__label">{comparison.eadLabel}</h4>
                <span className="comparison-card__badge">{comparison.eadBadge}</span>
              </div>
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul className="comparison-card__list" role="list" aria-label={comparison.eadLabel}>
                {comparison.items.map((item) => (
                  <li key={item.category} className="comparison-card__item">
                    <span className="comparison-card__category">{item.category}</span>
                    <span className="comparison-card__value">{item.ead}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="model-architecture fade-in" ref={refArchitecture}>
          <h3>{architecture.title}</h3>

          {/* Architecture diagram */}
          <figure className="model-architecture-figure">
            <img
              src={architectureImg}
              alt={`${architecture.encoder.title} → ${architecture.decoder.title} architecture diagram`}
              className="model-architecture-image"
            />
          </figure>

          {/* Encoder / Decoder panels */}
          <div className="model-arch-panels">
            <div className="model-arch-panel model-arch-panel--encoder">
              <div className="model-arch-panel-header">
                <span className="model-arch-panel-label">{architecture.encoder.label}</span>
                <h4 className="model-arch-panel-title">{architecture.encoder.title}</h4>
              </div>
              <p className="model-arch-panel-desc">{architecture.encoder.description}</p>
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul className="model-arch-panel-tasks" role="list">
                {architecture.encoder.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="model-arch-arrow" aria-hidden="true">
              <div className="model-arch-arrow-line" />
              <div className="model-arch-arrow-head" />
            </div>

            <div className="model-arch-panel model-arch-panel--decoder">
              <div className="model-arch-panel-header">
                <span className="model-arch-panel-label">{architecture.decoder.label}</span>
                <h4 className="model-arch-panel-title">{architecture.decoder.title}</h4>
              </div>
              <p className="model-arch-panel-desc">{architecture.decoder.description}</p>
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul className="model-arch-panel-tasks" role="list">
                {architecture.decoder.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Model;
