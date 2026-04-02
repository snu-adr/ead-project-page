import React from 'react';
import content from '../data/content.json';
import SectionTitle from './common/SectionTitle';
import VideoEmbed from './common/VideoEmbed';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/components/Model.css';

const Model = () => {
  const { sectionTitle, sectionTag, sectionSubtitle, comparison, architecture, demos } = content.model;
  const refComparison = useScrollFadeIn();
  const refArchitecture = useScrollFadeIn();
  const refDemos = useScrollFadeIn();

  return (
    <div className="model-wrapper">
      <div className="model-grid-bg" aria-hidden="true" />
      <section id="model">
        <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} tag={sectionTag} />

        <div className="model-comparison fade-in" ref={refComparison}>
          <h3>{comparison.title}</h3>

          <div className="comparison-cards">
            {/* Previous Research card — muted style */}
            <div className="comparison-card comparison-card--research">
              <div className="comparison-card__header">
                <span className="comparison-card__label">{comparison.researchLabel}</span>
                <span className="comparison-card__badge">{comparison.researchBadge}</span>
              </div>
              <ul className="comparison-card__list">
                {comparison.items.map((item, i) => (
                  <li key={i} className="comparison-card__item">
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
                <span className="comparison-card__label">{comparison.eadLabel}</span>
                <span className="comparison-card__badge">{comparison.eadBadge}</span>
              </div>
              <ul className="comparison-card__list">
                {comparison.items.map((item, i) => (
                  <li key={i} className="comparison-card__item">
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
          <p>{architecture.description}</p>

          {/* Architecture flow diagram */}
          <div className="model-flow-diagram">
            <div className="model-flow-inputs">
              <div className="model-flow-input-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M3 9a9 9 0 0 1 18 0M3 15a9 9 0 0 0 18 0"/></svg>
                <span>Camera</span>
              </div>
              <div className="model-flow-input-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="6" strokeDasharray="2 2"/><circle cx="12" cy="12" r="10" strokeDasharray="3 3"/></svg>
                <span>LiDAR</span>
              </div>
            </div>
            <div className="model-flow-arrow" aria-hidden="true">→</div>
            <div className="model-flow-block model-flow-block--encoder">
              <span className="model-flow-block-label">{architecture.encoder.label}</span>
              <span className="model-flow-block-title">{architecture.encoder.title}</span>
            </div>
            <div className="model-flow-arrow" aria-hidden="true">→</div>
            <div className="model-flow-block model-flow-block--decoder">
              <span className="model-flow-block-label">{architecture.decoder.label}</span>
              <span className="model-flow-block-title">{architecture.decoder.title}</span>
            </div>
            <div className="model-flow-arrow" aria-hidden="true">→</div>
            <div className="model-flow-output">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 12h18M12 5l7 7-7 7"/></svg>
              <span>Trajectory</span>
            </div>
            <div className="model-flow-caption">{architecture.diagramPlaceholder}</div>
          </div>

          {/* Encoder / Decoder panels */}
          <div className="model-arch-panels">
            <div className="model-arch-panel model-arch-panel--encoder">
              <div className="model-arch-panel-header">
                <span className="model-arch-panel-label">{architecture.encoder.label}</span>
                <span className="model-arch-panel-title">{architecture.encoder.title}</span>
              </div>
              <p className="model-arch-panel-desc">{architecture.encoder.description}</p>
              <ul className="model-arch-panel-tasks">
                {architecture.encoder.tasks.map((t, i) => (
                  <li key={i}>{t}</li>
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
                <span className="model-arch-panel-title">{architecture.decoder.title}</span>
              </div>
              <p className="model-arch-panel-desc">{architecture.decoder.description}</p>
              <ul className="model-arch-panel-tasks">
                {architecture.decoder.tasks.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="model-demos fade-in" ref={refDemos}>
          {demos.map((demo, i) => (
            <div key={i} className="model-demo">
              <h4>{demo.title}</h4>
              <p>{demo.description}</p>
              <VideoEmbed url={demo.videoUrl} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Model;
