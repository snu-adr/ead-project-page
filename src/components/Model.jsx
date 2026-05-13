import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionTitle from './common/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import architectureImg from '../assets/images/model_architecture.png';
import '../styles/components/Model.css';

const Model = () => {
  const { content } = useLanguage();
  const { sectionTitle, sectionTag, sectionSubtitle, architecture } = content.model;

  const refArchitecture = useScrollFadeIn();

  return (
    <div className="model-wrapper">
      <div className="model-grid-bg" aria-hidden="true" />
      <section id="model" aria-label={sectionTitle}>
        <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />

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
